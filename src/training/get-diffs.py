import json
import requests

# Replace with your own GitHub personal access token
token = "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"

keys = [
  "feat",
  "fix",
  "docs",
  "style",
  "refactor",
  "perf",
  "test",
  "build",
  "ci",
  "chore",
  "revert",
  "wip",
  "types",
  "release"
]

def get_a_diff_from_key( key ):
  # Search for commits starting with "feat:"
  query = key + ": repo:angular/angular"
  url = f"https://api.github.com/search/commits?q={query}"
  headers = {"Authorization": f"Bearer {token}"}
  response = requests.get(url, headers=headers)
  response.raise_for_status()
  data = response.json()
  # Get the diff from each commit
  for item in data["items"]:
    commit_url = item["html_url"]
    # commit_url + .patch
    response = requests.get(commit_url + ".patch", headers=headers)
    response.raise_for_status()
    data = response.text
    commit_first_line = item["commit"]["message"].split("\n")[0]
    # get part of data that is the diff (starting with diff --git)
    data = data[data.find("diff --git"):data.find("diff --git") + 500]
    # replace all { } with none
    data = data.replace("{", "").replace("}", "")
    return { 
      "answer": commit_first_line,
      "question": data
    }
  

examples = []
for key in keys:
  examples = examples + [get_a_diff_from_key(key)]

print(json.dumps(examples, indent=2))