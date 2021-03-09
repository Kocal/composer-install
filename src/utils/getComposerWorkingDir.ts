import {info} from '@actions/core'
import {parseStringToArguments} from './parseStringToArguments'

export function getComposerWorkingDir(composerOptions = ''): string {
  const composerOptionsParsed = parseStringToArguments(composerOptions)
  const composerWorkingDir = (
    (composerOptionsParsed['working-dir'] as string) ||
    (composerOptionsParsed.d as string) ||
    ''
  ).trim()

  if (composerWorkingDir === '') {
    info(`Composer working directory found at project root.`)
  } else {
    info(`Composer working directory found at "${composerWorkingDir}".`)
  }

  return composerWorkingDir
}
