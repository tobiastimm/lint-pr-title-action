import core from '@actions/core';
import github from '@actions/github';
import { lintPR } from './lint';

async function run(): Promise<void> {
  try {
    const configPath = core.getInput('configurationPath', { required: true });
    const title = getPrTitle();
    if (!title) {
      core.debug('Could not get pull request title from context, exiting');
      return;
    }
    await lintPR(title, configPath);
  } catch (error: unknown) {
    if (typeof error === 'string') {
      core.error(error);
      core.setFailed(error);
    } else if (error instanceof Error) {
      core.error(error);
      core.setFailed(error.message);
    }
  }
}

function getPrTitle(): string | undefined {
  const pullRequest = github.context.payload.pull_request;
  if (!pullRequest) {
    return undefined;
  }

  return pullRequest.title;
}

run();
