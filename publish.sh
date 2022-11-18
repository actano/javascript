# set -e

usage() (
  echo 'Usage: ./publish.sh <package> <sem_ver>'
  echo 'Example: ./publish.sh packages/eslint-config-actano minor'
)

publish_new_version() (
  cd $1
  npm version --no-git-tag-version $2
  version=$(grep version package.json | awk '{print $2}' | sed -e 's/"//g' -e 's/,//g')
  package=$(echo $1 | awk -F '/' '{print $2}')
  git commit -am "v$version $package"
  git tag "v$version-$package"
  echo Trying to publish. Please manually ensure if it worked. If you have no permission, ask someone who has
  npm publish
)

if [ ! -d $1 ] ; then usage ; exit 1 ; fi
if [ ! -f "$1/package.json" ] ; then usage ; exit 1 ; fi
if [[ $2 != 'minor' ]] && [[ $2 != 'patch' ]] ; then usage ; exit 1 ; fi

if [[ $(git status -s  | grep '^.M') ]];then
  echo The working directory is not clean.
  echo ''
  echo '$ git status'
  git status
  exit 1
fi

publish_new_version $1 $2
