# Spinning up a new instance in GCP

## Using terraform to create google cloud



0. Add the google provider to terraform
[Google Providers](https://www.terraform.io/docs/providers/google/index.html)


1. Making a new top level folder where the app will live, in terraform

```bash
resource "google_folder" "training_application_folder"{
    display_name = "application"
    parent       = google_folder.training_folder.name
}
```

Where `google_folder.training_folder.name` comes from the provider


2. Creating a new project

```bash
resource "google_project" "training-platform-project" {
    name  =             "Synergy platform training"
    project_id =        "super"
    billing_account =   "var.billing_account"
    org_id =            "data.google"

```

3. Create a new workspace
Where all the variables will live

```bash
project_suffix = "training"
project_id     =  "application_training"
...
```

 Add all the password the the local .env file
- DB password
- Rails secret


4. Authorization for terraform to work the Project (**GCP console**)

Create a new service account in GCP and use the they to authorize terraform to work on the GCP
- Add key to the `.envrc`
- Add the email generated from then new service account to the project as an owner (That is the terraform account)


5. Go the K* engine(**GCP console**)
- Connect

6. Start to deploy with Kubernetes









