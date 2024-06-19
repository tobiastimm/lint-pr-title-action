import { LintOptions, ParserPreset, QualifiedConfig } from '@commitlint/types';
import load from '@commitlint/load';
import lint from '@commitlint/lint';
import { ParseArgsConfig } from 'util';

function selectParserOpts(parserPreset?: ParserPreset) {
  if (typeof parserPreset !== 'object') {
    return undefined;
  }

  if (typeof parserPreset.parserOpts !== 'object') {
    return undefined;
  }

  return parserPreset.parserOpts;
}

function getOptions(configuration: QualifiedConfig): LintOptions {
  const parserOpts = selectParserOpts(configuration.parserPreset);
  const opts: LintOptions & { parserOpts: ParseArgsConfig } = {
    parserOpts: {},
    plugins: {},
    ignores: [],
    defaultIgnores: true,
  };
  if (parserOpts) {
    opts.parserOpts = parserOpts;
  }
  if (configuration.plugins) {
    opts.plugins = configuration.plugins;
  }
  if (configuration.ignores) {
    opts.ignores = configuration.ignores;
  }
  if (!configuration.defaultIgnores) {
    opts.defaultIgnores = false;
  }
  return opts;
}

export async function lintPR(title: string, configPath: string) {
  const configuration = await load(
    {},
    { file: configPath, cwd: process.cwd() },
  );

  const options = getOptions(configuration);

  const result = await lint(title, configuration.rules, options);

  if (result.valid) return;
  const errorMessage = result.errors
    .map(({ message, name }: any) => `${name}:${message}`)
    .join('\n');
  throw new Error(errorMessage);
}
