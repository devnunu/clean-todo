# Front end(React native)

## 개발환경 세팅

- CRNA(Create React Native App)에서 typescript script 사용

```bash
$ npm install -g create-react-native-app
$ create-react-native-app my-app --scripts-version=react-native-scripts-ts
$ cd my-app/
$ npm start
```

### 에러 발생

```
$ react-native-scripts-ts start
17:04:42: Unable to start server
See https://git.io/v5vcn for more information, either install watchman or run the following snippet:
  sudo sysctl -w kern.maxfiles=5242880
  sudo sysctl -w kern.maxfilesperproc=524288

error An unexpected error occurred: "Command failed.
Exit code: 1
Command: sh
Arguments: -c react-native-scripts-ts start
Directory: /Users/eunwoo/Desktop/personal/clean-todo/webapp
Output:
".
info If you think this is a bug, please open a bug report with the information provided in "/Users/eunwoo/Desktop/personal/clean-todo/webapp/yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

위와 같은 에러 발생시 watchman을 설치해준다. 설치 명령어는 아래와 같다.

```
brew update
brew install watchman
```