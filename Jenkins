pipeline {
    agent {
        docker {
            image 'bigfanoftim/jenkins-image:101.0.5'
            args '-u root:sudo -v /var/run:/var/run'
        }
    }
    environment { 
                IMAGENAME                  = credentials('IMAGENAME')
                DOCKERHUB_CREDENTIALS      = credentials('bigfanoftim-dockerhub')
    }
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'echo "dwen is soldier"'
                    app = docker.build "${env.IMAGENAME}"
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                }
            }
        }
        stage('Delete') {
            steps {
                script {
                    sh "docker rmi '${env.IMAGENAME}:${env.BUILD_NUMBER}'"
                    sh "docker rmi '${env.IMAGENAME}:latest'"
                }
            }
        }
        stage('Deploy #1') {
            steps {
                sshagent(credentials : ['real-ssh-key']) {
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@192.168.3.66 'docker pull '${env.IMAGENAME}:latest' && docker stop \$(docker ps -aq) && docker container prune -f && docker image prune -f && docker run -dp 3000:3000 '${env.IMAGENAME}:latest''"
                }
            }
        }
        stage('Deploy #2') {
            steps {
                sshagent(credentials : ['real-ssh-key']) {
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@192.168.4.220 'docker pull '${env.IMAGENAME}:latest' && docker stop \$(docker ps -aq) && docker container prune -f && docker image prune -f && docker run -dp 3000:3000 '${env.IMAGENAME}:latest''"
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
// 젠킨스 테스트