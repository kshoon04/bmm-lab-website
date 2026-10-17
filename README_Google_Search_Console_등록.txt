BMM Lab Google 검색 등록 안내 (v9.0)

1. 이 폴더의 모든 파일을 GitHub bmm-lab-website 저장소 최상위에 업로드/교체하고 Commit changes.
2. Netlify Deploys에서 Published 상태 확인.
3. https://bmm-lab.netlify.app/robots.txt 및 https://bmm-lab.netlify.app/sitemap.xml 접속 확인.
4. https://search.google.com/search-console 접속 → 속성 추가 → URL 접두어 선택 → https://bmm-lab.netlify.app/ 입력.
5. 소유권 확인 방법: HTML 파일을 다운로드한 뒤 해당 파일을 GitHub 저장소 최상위에 업로드하고 Netlify 배포 완료 후 Search Console에서 확인 클릭. (또는 Google 제공 meta verification 태그를 index.html head에 추가)
6. Search Console → Sitemaps → sitemap.xml 입력 및 제출.
7. URL 검사 → https://bmm-lab.netlify.app/ 입력 → 색인 생성 요청.

주의: 현재 홈페이지는 단일 페이지 앱(SPA)으로 여러 메뉴를 자바스크립트로 전환합니다. 따라서 사이트맵에는 실제 별도 HTML 문서로 제공되는 루트 URL만 포함합니다. Google에서 각 연구 상세 화면이 독립적으로 검색되게 하려면 후속으로 고유 URL/프리렌더링이 필요합니다. Google 검색 노출 및 순위는 보장되지 않습니다.
