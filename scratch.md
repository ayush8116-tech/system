# PLAN

## requirements

webhook server (deploy with docker)
system server (run on local in shell with node)
github webhook attached on the working repo with webhook(deployed) server link 
webhook for workflow event only

## flow

user will push
request some in webhook server (deployed in render with docker (deno))
webhook server will ping the request with workflow-conclusion to system server which will be open with node in shell (no need to deploy system server)
system server will get conclusion as payload and send the signal to arduino according to that

Skip to content
ayush8116-tech
chat-app-project
Repository navigation
Code
Issues
1
 (1)
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Settings: ayush8116-tech/chat-app-project
Access
Code and automation
Security
Integrations
Webhooks / Manage webhook
Settings
Recent Deliveries
  f3589ee0-2b52-11f1-918a-312da6eca10e workflow_run.completed
2026-03-29 15:07:55
…

Request

Response 500
 Completed in 4.65 seconds.
Headers
Request URL: https://alerting-system.loca.lt/indicate
Request method: POST
Accept: */*
Content-Type: application/json
User-Agent: GitHub-Hookshot/77ae4f1
X-Github-Delivery: f3589ee0-2b52-11f1-918a-312da6eca10e
X-Github-Event: workflow_run
X-Github-Hook-Id: 601639142
X-Github-Hook-Installation-Target-Id: 1172701762
X-Github-Hook-Installation-Target-Type: repository
Payload
{
  "action": "completed",
  "workflow_run": {
    "id": 23706201888,
    "name": "Deno",
    "node_id": "WFR_kwLOReYCQs8AAAAFhP_vIA",
    "head_branch": "main",
    "head_sha": "0fdb0e90303808a70a765a6490495708a3171f71",
    "path": ".github/workflows/deno.yml",
    "display_title": "adds q",
    "run_number": 52,
    "event": "push",
    "status": "completed",
    "conclusion": "failure",
    "workflow_id": 247722705,
    "check_suite_id": 62471491503,
    "check_suite_node_id": "CS_kwDOReYCQs8AAAAOi5dPrw",
    "url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/runs/23706201888",
    "html_url": "https://github.com/ayush8116-tech/chat-app-project/actions/runs/23706201888",
    "pull_requests": [

    ],
    "created_at": "2026-03-29T09:37:35Z",
    "updated_at": "2026-03-29T09:37:49Z",
    "actor": {
      "login": "ayush8116-tech",
      "id": 206581930,
      "node_id": "U_kgDODFAwqg",
      "avatar_url": "https://avatars.githubusercontent.com/u/206581930?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ayush8116-tech",
      "html_url": "https://github.com/ayush8116-tech",
      "followers_url": "https://api.github.com/users/ayush8116-tech/followers",
      "following_url": "https://api.github.com/users/ayush8116-tech/following{/other_user}",
      "gists_url": "https://api.github.com/users/ayush8116-tech/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ayush8116-tech/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ayush8116-tech/subscriptions",
      "organizations_url": "https://api.github.com/users/ayush8116-tech/orgs",
      "repos_url": "https://api.github.com/users/ayush8116-tech/repos",
      "events_url": "https://api.github.com/users/ayush8116-tech/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ayush8116-tech/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "run_attempt": 1,
    "referenced_workflows": [

    ],
    "run_started_at": "2026-03-29T09:37:35Z",
    "triggering_actor": {
      "login": "ayush8116-tech",
      "id": 206581930,
      "node_id": "U_kgDODFAwqg",
      "avatar_url": "https://avatars.githubusercontent.com/u/206581930?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ayush8116-tech",
      "html_url": "https://github.com/ayush8116-tech",
      "followers_url": "https://api.github.com/users/ayush8116-tech/followers",
      "following_url": "https://api.github.com/users/ayush8116-tech/following{/other_user}",
      "gists_url": "https://api.github.com/users/ayush8116-tech/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ayush8116-tech/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ayush8116-tech/subscriptions",
      "organizations_url": "https://api.github.com/users/ayush8116-tech/orgs",
      "repos_url": "https://api.github.com/users/ayush8116-tech/repos",
      "events_url": "https://api.github.com/users/ayush8116-tech/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ayush8116-tech/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "jobs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/runs/23706201888/jobs",
    "logs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/runs/23706201888/logs",
    "check_suite_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/check-suites/62471491503",
    "artifacts_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/runs/23706201888/artifacts",
    "cancel_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/runs/23706201888/cancel",
    "rerun_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/runs/23706201888/rerun",
    "previous_attempt_url": null,
    "workflow_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/workflows/247722705",
    "head_commit": {
      "id": "0fdb0e90303808a70a765a6490495708a3171f71",
      "tree_id": "f089280626b9e3874168b880baa582ae310340ff",
      "message": "adds q",
      "timestamp": "2026-03-29T09:37:25Z",
      "author": {
        "name": "Ayush Verma",
        "email": "vermajiii8116@gmail.com"
      },
      "committer": {
        "name": "Ayush Verma",
        "email": "vermajiii8116@gmail.com"
      }
    },
    "repository": {
      "id": 1172701762,
      "node_id": "R_kgDOReYCQg",
      "name": "chat-app-project",
      "full_name": "ayush8116-tech/chat-app-project",
      "private": false,
      "owner": {
        "login": "ayush8116-tech",
        "id": 206581930,
        "node_id": "U_kgDODFAwqg",
        "avatar_url": "https://avatars.githubusercontent.com/u/206581930?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ayush8116-tech",
        "html_url": "https://github.com/ayush8116-tech",
        "followers_url": "https://api.github.com/users/ayush8116-tech/followers",
        "following_url": "https://api.github.com/users/ayush8116-tech/following{/other_user}",
        "gists_url": "https://api.github.com/users/ayush8116-tech/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ayush8116-tech/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ayush8116-tech/subscriptions",
        "organizations_url": "https://api.github.com/users/ayush8116-tech/orgs",
        "repos_url": "https://api.github.com/users/ayush8116-tech/repos",
        "events_url": "https://api.github.com/users/ayush8116-tech/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ayush8116-tech/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false
      },
      "html_url": "https://github.com/ayush8116-tech/chat-app-project",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/ayush8116-tech/chat-app-project",
      "forks_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/forks",
      "keys_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/teams",
      "hooks_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/hooks",
      "issue_events_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/events",
      "assignees_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/tags",
      "blobs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/languages",
      "stargazers_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/stargazers",
      "contributors_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/contributors",
      "subscribers_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/subscribers",
      "subscription_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/subscription",
      "commits_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/merges",
      "archive_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/downloads",
      "issues_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/labels{/name}",
      "releases_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/deployments"
    },
    "head_repository": {
      "id": 1172701762,
      "node_id": "R_kgDOReYCQg",
      "name": "chat-app-project",
      "full_name": "ayush8116-tech/chat-app-project",
      "private": false,
      "owner": {
        "login": "ayush8116-tech",
        "id": 206581930,
        "node_id": "U_kgDODFAwqg",
        "avatar_url": "https://avatars.githubusercontent.com/u/206581930?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ayush8116-tech",
        "html_url": "https://github.com/ayush8116-tech",
        "followers_url": "https://api.github.com/users/ayush8116-tech/followers",
        "following_url": "https://api.github.com/users/ayush8116-tech/following{/other_user}",
        "gists_url": "https://api.github.com/users/ayush8116-tech/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ayush8116-tech/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ayush8116-tech/subscriptions",
        "organizations_url": "https://api.github.com/users/ayush8116-tech/orgs",
        "repos_url": "https://api.github.com/users/ayush8116-tech/repos",
        "events_url": "https://api.github.com/users/ayush8116-tech/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ayush8116-tech/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false
      },
      "html_url": "https://github.com/ayush8116-tech/chat-app-project",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/ayush8116-tech/chat-app-project",
      "forks_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/forks",
      "keys_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/teams",
      "hooks_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/hooks",
      "issue_events_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues/events{/number}",
      "events_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/events",
      "assignees_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/assignees{/user}",
      "branches_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/branches{/branch}",
      "tags_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/tags",
      "blobs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/languages",
      "stargazers_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/stargazers",
      "contributors_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/contributors",
      "subscribers_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/subscribers",
      "subscription_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/subscription",
      "commits_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/contents/{+path}",
      "compare_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/merges",
      "archive_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/downloads",
      "issues_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues{/number}",
      "pulls_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/labels{/name}",
      "releases_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/releases{/id}",
      "deployments_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/deployments"
    }
  },
  "workflow": {
    "id": 247722705,
    "node_id": "W_kwDOReYCQs4Ow_LR",
    "name": "Deno",
    "path": ".github/workflows/deno.yml",
    "state": "active",
    "created_at": "2026-03-18T03:04:01.000Z",
    "updated_at": "2026-03-18T03:04:01.000Z",
    "url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/workflows/247722705",
    "html_url": "https://github.com/ayush8116-tech/chat-app-project/blob/main/.github/workflows/deno.yml",
    "badge_url": "https://github.com/ayush8116-tech/chat-app-project/workflows/Deno/badge.svg"
  },
  "repository": {
    "id": 1172701762,
    "node_id": "R_kgDOReYCQg",
    "name": "chat-app-project",
    "full_name": "ayush8116-tech/chat-app-project",
    "private": false,
    "owner": {
      "login": "ayush8116-tech",
      "id": 206581930,
      "node_id": "U_kgDODFAwqg",
      "avatar_url": "https://avatars.githubusercontent.com/u/206581930?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ayush8116-tech",
      "html_url": "https://github.com/ayush8116-tech",
      "followers_url": "https://api.github.com/users/ayush8116-tech/followers",
      "following_url": "https://api.github.com/users/ayush8116-tech/following{/other_user}",
      "gists_url": "https://api.github.com/users/ayush8116-tech/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ayush8116-tech/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ayush8116-tech/subscriptions",
      "organizations_url": "https://api.github.com/users/ayush8116-tech/orgs",
      "repos_url": "https://api.github.com/users/ayush8116-tech/repos",
      "events_url": "https://api.github.com/users/ayush8116-tech/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ayush8116-tech/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/ayush8116-tech/chat-app-project",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/ayush8116-tech/chat-app-project",
    "forks_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/forks",
    "keys_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/teams",
    "hooks_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/hooks",
    "issue_events_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues/events{/number}",
    "events_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/events",
    "assignees_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/assignees{/user}",
    "branches_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/branches{/branch}",
    "tags_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/tags",
    "blobs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/languages",
    "stargazers_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/stargazers",
    "contributors_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/contributors",
    "subscribers_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/subscribers",
    "subscription_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/subscription",
    "commits_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/contents/{+path}",
    "compare_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/merges",
    "archive_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/downloads",
    "issues_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/issues{/number}",
    "pulls_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/labels{/name}",
    "releases_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/releases{/id}",
    "deployments_url": "https://api.github.com/repos/ayush8116-tech/chat-app-project/deployments",
    "created_at": "2026-03-04T15:51:20Z",
    "updated_at": "2026-03-29T09:37:36Z",
    "pushed_at": "2026-03-29T09:37:33Z",
    "git_url": "git://github.com/ayush8116-tech/chat-app-project.git",
    "ssh_url": "git@github.com:ayush8116-tech/chat-app-project.git",
    "clone_url": "https://github.com/ayush8116-tech/chat-app-project.git",
    "svn_url": "https://github.com/ayush8116-tech/chat-app-project",
    "homepage": null,
    "size": 20,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 1,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "has_pull_requests": true,
    "pull_request_creation_policy": "all",
    "topics": [

    ],
    "visibility": "public",
    "forks": 0,
    "open_issues": 1,
    "watchers": 0,
    "default_branch": "main"
  },
  "sender": {
    "login": "ayush8116-tech",
    "id": 206581930,
    "node_id": "U_kgDODFAwqg",
    "avatar_url": "https://avatars.githubusercontent.com/u/206581930?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ayush8116-tech",
    "html_url": "https://github.com/ayush8116-tech",
    "followers_url": "https://api.github.com/users/ayush8116-tech/followers",
    "following_url": "https://api.github.com/users/ayush8116-tech/following{/other_user}",
    "gists_url": "https://api.github.com/users/ayush8116-tech/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ayush8116-tech/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ayush8116-tech/subscriptions",
    "organizations_url": "https://api.github.com/users/ayush8116-tech/orgs",
    "repos_url": "https://api.github.com/users/ayush8116-tech/repos",
    "events_url": "https://api.github.com/users/ayush8116-tech/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ayush8116-tech/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }
}
