def NAME_OF_STAGE
pipeline {
    agent {
        docker {
            image 'dwenup/jenkins-image:101.0.5'
            args '-u root:sudo -v /var/run:/var/run'
        }
    }
    environment {
                IMAGENAME                   = credentials('IMAGENAME_FRONTEND')
                DOCKERHUB_CREDENTIALS       = credentials('DWENUP_DOCKERHUB')
                FRONTEND_FIRST_INSTANCE_IP  = credentials('FRONTEND_FIRST_INSTANCE_IP')
                FRONTEND_SECOND_INSTANCE_IP = credentials('FRONTEND_SECOND_INSTANCE_IP')

    }
    stages {
        stage('Start') {
            steps {
                script {
                    blocks = [
                        [
                            "type": "section",
                            "text": [
                                "type": "mrkdwn",
                                "text": "*<FRONTEND PIPELINE START!>*"
                            ]
                        ],
                        [
                            "type": "divider"
                        ]
                        ,
                        [
                            "type": "section",
                            "fields": [
                                [
                                    "type": "mrkdwn",
                                    "text": "*Branch:*\n<${env.GIT_URL}|${env.GIT_BRANCH}>"
                                ],
                                [
                                    "type": "mrkdwn",
                                    "text": "*BuildTag:*\n${env.BUILD_TAG}"
                                ],
                            ]
                        ]
	                ]
                    slackSend (color: '#0FFF22', blocks: blocks)
                }
            }
        }        
        stage('Build') {
            steps {
                script {
                    NAME_OF_STAGE = "${env.STAGE_NAME}"
                    sh 'echo "dwen is soldier"'
                    app = docker.build "${env.IMAGENAME}"
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    NAME_OF_STAGE = "${env.STAGE_NAME}"
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                }
            }
        }
        stage('Delete') {
            steps {
                script {
                    NAME_OF_STAGE = "${env.STAGE_NAME}"
                    sh "docker rmi '${env.IMAGENAME}:${env.BUILD_NUMBER}'"
                    sh "docker rmi '${env.IMAGENAME}:latest'"
                }
            }
        }
        stage('Deploy #1') {
            steps {
                script {
                    NAME_OF_STAGE = "${env.STAGE_NAME}"
                }
                sshagent(credentials : ['real-ssh-key']) {
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@${env.FRONTEND_FIRST_INSTANCE_IP} 'docker pull '${env.IMAGENAME}:latest' && docker stop \$(docker ps -aq) && docker container prune -f && docker image prune -f && docker run -dp 3000:80 '${env.IMAGENAME}:latest''"
                }
            }
        }
        stage('Deploy #2') {
            steps {
                script {
                    NAME_OF_STAGE = "${env.STAGE_NAME}"
                }
                sshagent(credentials : ['real-ssh-key']) {
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@${env.FRONTEND_SECOND_INSTANCE_IP} 'docker pull '${env.IMAGENAME}:latest' && docker stop \$(docker ps -aq) && docker container prune -f && docker image prune -f && docker run -dp 3000:80 '${env.IMAGENAME}:latest''"
                }
            }
        }
        stage('Finish') {
            steps {
                script {
                    slackSend (color: '#0075FC', message: "*<FRONTEND PIPELINE FINISHED>*\n<${env.RUN_DISPLAY_URL}|JenkinsPipeLine>")
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
        failure {
            slackSend (color: '#FF1001', message: """
            <!channel>\n*<$NAME_OF_STAGE FAILED!>*\nMore Info at : <${env.RUN_DISPLAY_URL}/consoleFull|Console log>
            """)
        }
    }
}