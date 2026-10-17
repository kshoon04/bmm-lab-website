BMM Lab v8.9 - Netlify 방문 카운터

중요: 단순히 index.html을 로컬에서 열거나 정적 파일만 업로드하면 카운터가 동작하지 않습니다.
Netlify에서 Functions 및 npm 의존성이 빌드되어야 합니다.

권장 배포: GitHub에 이 폴더의 모든 파일을 업로드한 뒤 Netlify에서 Import an existing project -> GitHub 연결.
Build command: npm install / Publish directory: . / Functions directory: netlify/functions

카운터는 오늘(한국시간) 방문 세션 및 누적 방문 세션을 대략적으로 집계합니다. 브라우저 탭의 세션 저장소로 중복 집계를 줄이지만, 정확한 고유 방문자 수는 아닙니다. 동시 방문이 많으면 Blobs read-modify-write 방식에서 일부 증가분이 유실될 수 있습니다. 초기 값은 0이며 이전 방문 기록을 소급 집계하지 않습니다.
로컬 파일에서는 카운터를 숨깁니다.
