// for production 
export const environment = {
    BASE_BE_URL:'https://ecp-main-enzbw3vwlq-ue.a.run.app',
    LIST_ALL_JOBS_URL :'get-job-list',
    LIST_ALL_COURSES_URL :'get-course-list',
    GET_COURSE_DETAILS_BY_ID_URL :'get-course-by-id',
    API_KEY:'ecpapis',
    ALL_JOB_TEST_RESP:{
        "job_list": [
            {
                "name": "CLOUD-ENGINEER",
                "summary": "The Cloud Engineer will be responsible for designing, implementing, and maintaining our cloud infrastructure. This role involves working closely with development, operations, and security teams to ensure our cloud-based systems are robust, scalable, and secure."
            },
            {
                "name": "PLATFORM-ENGINEER",
                "summary": "The Platform Engineer will be responsible for designing, building, and maintaining the core infrastructure that supports our applications and services. This role involves working closely with development, operations, and security teams to ensure the platform is reliable, scalable, and secure."
            },
            {
                "name": "SRE",
                "summary": "The SRE will be responsible for ensuring the reliability, performance, and scalability of our systems. This role involves working closely with development and operations teams to build and maintain robust infrastructure, automate processes, and improve system performance."
            }
        ],
        "message": "job List containing 3 jobs retrieved from firestore db successfully.",
        "status_code": 200
    },
    ALL_COURSE_TEST_RESP:{
        "course_list": [
            {
                "name": "GCP-FUNDAMENTALS",
                "summary": "Core Infrastructure introduces important concepts and terminology for working with Google Cloud. Through videos and hands-on labs, this course presents and compares many of Google Cloud's computing and storage services, along with important resource and policy management tools."
            },
            {
                "name": "PLATFORM-ENGINEER-BOOTCAMP",
                "summary": "Become an ace platform engineer enabled on foundational skillset, Terraform IaC, CICD, networking and security fundamentals."
            },
            {
                "name": "SRE-BOOTCAMP",
                "summary": "Become an ace SRE enabled on core concepts SLIs, SLOs, Error Budgets; Deploy apps on GCP, and implement Golden Signals."
            }
        ],
        "message": "Course List containing 3 courses retrieved from firestore db successfully.",
        "status_code": 200
    },
    COURSE_DETAIL_SRE_BOOTCAMP:{
        "course": {
            "audience": [
                "Anyone - wanting to kickstart a career in SRE",
                "Software Engineers",
                "Platform Engineers",
                "If you are a software engineer wanting to switch to SRE, then this is the quickest way"
            ],
            "duration": "20hrs",
            "modules": [
                {
                    "agenda": [
                        "Instructor Introduction",
                        "Instructor Coordinates",
                        "Agenda",
                        "GCP Bootstrap"
                    ],
                    "name": "Introduction"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Site Reliability Engineering",
                        "Site Reliability Engineer",
                        "Recap"
                    ],
                    "name": "Introduction to SRE | Site Reliability Engineering"
                },
                {
                    "agenda": [
                        "Introduction",
                        "GCP Overview",
                        "GCP Services used in this course",
                        "Recap"
                    ],
                    "name": "Platform Overview"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Help Yourselves",
                        "System Info",
                        "Basic Commands",
                        "Troubleshooting",
                        "Find",
                        "Manipulate File Content",
                        "Grep",
                        "File Permissions",
                        "Crontab",
                        "OS Distributions",
                        "Recap"
                    ],
                    "name": "Linux Crash Course"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Example 1 | ZSH Profile",
                        "Example 2 | getcmd utility",
                        "Example 3 | getroles utility",
                        "Utilities Bash Scripts",
                        "Recap"
                    ],
                    "name": "Automation"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Help Yourselves - Documentation, Cheatsheets and more",
                        "Formatting Output",
                        "Filter and Sort Results",
                        "Recap"
                    ],
                    "name": "gcloud"
                },
                {
                    "agenda": [
                        "Introduction",
                        "GKE Cluster and Context",
                        "Help Yourselves",
                        "kubectl GET | the most used command",
                        "Deploy apps - Declarative",
                        "Deploy apps - Imperative",
                        "Troubleshooting",
                        "Recap"
                    ],
                    "name": "kubectl"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Basic Navigation",
                        "Edit - Insert | Delete | Copy | Paste",
                        "Search and Replace",
                        "Configuration | .vimrc profile",
                        "Cheatsheet",
                        "Recap"
                    ],
                    "name": "vi editor"
                },
                {
                    "agenda": [
                        "Introduction",
                        "RFC1918 Introduction",
                        "Understand CIDR Notation",
                        "Subnetting Exercise",
                        "Subnetting Solution",
                        "Subnetting | Implement the solution",
                        "Recap"
                    ],
                    "name": "IP Address and Subnetting"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Create a VM from GCP Console",
                        "SSH into the VM and use Linux commands to validate our VM",
                        "Install Apache Webserver on the VM",
                        "Configure Apache web-server with our own HTML",
                        "Recap"
                    ],
                    "name": "GCE | Host your website on Apache web-server in GCE"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Missing Telemetry without the Ops Agent",
                        "Install GCP Monitoring Ops Agent",
                        "Validate Logs captured by Monitoring Ops Agent",
                        "Create Log based metrics",
                        "Recap"
                    ],
                    "name": "Implement Monitoring Ops Agent"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Out of the box GCP dashboards",
                        "Apache webserver configuration update to capture response time",
                        "Latency Log Based Metrics",
                        "Traffic Chart - Apache webserver metrics",
                        "Traffic Chart - Log based metrics",
                        "Availability SLI and GCP Native Chart",
                        "Latency Chart",
                        "Recap"
                    ],
                    "name": "GCE | Implement GCP Native Observability"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Install Grafana",
                        "Address Firewall Issue and Login to Grafana Application",
                        "Recap"
                    ],
                    "name": "Host Grafana Server on GCE"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Configure Data Sources - Monitoring",
                        "Review GCP Logs and Dashboards",
                        "Configure Data Sources - Logging",
                        "Implement Golden Signals Dashboard",
                        "Recap"
                    ],
                    "name": "GCE | Implement Observability in Grafana"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Overview of the demo apps - Numberwiki and Mathfunctions",
                        "Walkthrough the k8s yaml configurations files for the apps",
                        "Deploy the apps in GKE using kubectl from CLI",
                        "Deploy the apps in Cloud Run",
                        "Recap"
                    ],
                    "name": "Containerized Demo Apps for GKE and Cloud Run"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Review Demo Apps and Logs",
                        "Plot Traffic Chart in Metrics Explorer",
                        "Plot Availability Chart in Metrics Explorer",
                        "Plot Latency and Saturation Charts in Metrics Explorer",
                        "GCP Native out-of-the-box Dashboards",
                        "Export GCP Native Dashboards JSONs",
                        "Grafana Golden Signals Dashboard",
                        "Recap"
                    ],
                    "name": "Cloud Run | Implement Observability"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Create Cluster | Basic and Networking Configuration",
                        "Create Cluster | Advanced Settings",
                        "Review the cluster in GCP Console",
                        "Connect to Cluster from CLI",
                        "Understand and Resolve the issue connecting to the cluster",
                        "SRETerminal Bastion Host",
                        "Recap"
                    ],
                    "name": "GKE Cluster - Create and Connect"
                },
                {
                    "agenda": [
                        "Introduction",
                        "Validate apps and induce Traffic",
                        "Review out of the box observability dashboards",
                        "Build Golden Signals Dashboards - GCP Native",
                        "Build Golden Signals Dashboards - Grafana",
                        "Recap"
                    ],
                    "name": "GKE | Implement Observability"
                },
                {
                    "agenda": [
                        "GitHub repos",
                        "Conclusion"
                    ],
                    "name": "Recap"
                }
            ],
            "name": "SRE Bootcamp | Build, Deploy, Run and Implement Observability",
            "objectives": [
                "Site Reliability Engineering origin",
                "Observability core concepts - Golden Signals, SLIs, SLOs, Error Budgets",
                "Understands the characteristics of a good SRE",
                "Get enabled on SRE foundational skillset - Linux, vi editor, ip sebnetting etc.",
                "GCP CLI - gcloud and kubectl",
                "Deploy apps in all forms of compute on GCP - GCE, GKE and Cloud Run",
                "Automation - how to, and real world examples using Bash (Python not covered in this course).",
                "GCP Logging and Monitoring, Log based metrics",
                "Observability Tools - GCP Native Monitoring and Grafana",
                "Troubleshooting tools and techniques using Cloud logging and monitoring and kubectl."
            ],
            "prerequisites": [
                "Familiarity with application development",
                "Basic exposure to any programming language",
                "Basic understanding of Linux",
                "A Mac or PC computer with access to the internet",
                "No paid software required - we will use GCP free tier"
            ],
            "summary": "Become an ace SRE enabled on core concepts SLIs, SLOs, Error Budgets; Deploy apps on GCP, and implement Golden Signals.",
            "youtube_link": "https://youtu.be/PzMhLF3Cg0s?si=9tYa8c-gluyRJVe7"
        },
        "message": "course retrieved successfully.",
        "status_code": 200
    }
};
