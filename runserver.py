#!/usr/bin/env python3
import os
import subprocess

def git_pull_and_run(command_to_run):
    # Pull from the Git repository
    subprocess.run('git pull', shell=True)

    os.chdir('pageV.1')

    # Run the specified command
    subprocess.run(command_to_run, shell=True)

if __name__ == "__main__":
    command_to_run = "node server.js"

    # Call the function
    git_pull_and_run(command_to_run)
