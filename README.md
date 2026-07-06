# HouHou Fighter v0.8.26

- 상대편 등장 시 공격 이펙트 방향이 공격 방향에 맞게 자동 반전됩니다.
- 번개정령 character.json을 분리/정리했습니다.
- 번개정령 특징 문구 중복을 수정했습니다.

# HouHou Fighter v0.8.16

- 캐릭터 프로필 창 UI 개선: 2x5 페이지 방식
- 이전/다음 버튼 추가
- 등급 정렬: SPECIAL → LEGENDARY → SUPER EPIC → EPIC → RARE → NORMAL

# HouHou Fighter v0.8.8

적용 내용
- 번개정령 공격 이펙트 격자 배경 투명 처리
- 번개정령 투사체 격자 배경 투명 처리
- 모든 캐릭터 전투 종료 후 공격 이펙트/투사체/텍스트 정리
- 다음 전투 시작 시 이펙트 상태 초기화

실행: index.html


### v0.8.11
- 꼬마정령 이동속도 4 적용 및 스프라이트 격자 제거


### v0.8.13
걍슬라임(EPIC)이 실제 선택/뽑기/전투에 나오도록 수정했습니다. 공격 시 1초 마비 효과가 적용됩니다.


### v0.8.14
걍슬라임이 뽑기에서 나오지 않던 문제를 수정했습니다. 원인: data/gacha.json에는 있었지만 번들 내부 GACHA_DATA에 누락되어 있었습니다.

### v0.8.15
- 걍슬라임 이미지 격자 제거 및 마비 재적용 방지 쿨타임 적용.


### v0.8.17
각성한 걍사람 이미지 교체, 격자 제거, 4프레임 중심 방출 공격 이펙트 적용.

### v0.8.18
각성한 걍사람 idle/win 리소스 교체, 공격 이펙트 5프레임 및 4/5프레임 반복 재생 적용.


## v0.8.19 - 각성한걍사람 공격 이펙트 전방 이동
- 각성한걍사람 공격 이펙트 1~3프레임은 캐릭터 중심에서 시작
- 4프레임은 상대 방향으로 48px 이동
- 5프레임은 상대 방향으로 96px 이동
- 왼쪽 공격 시 이펙트 이미지를 자동 좌우 반전
- 마지막 긴 이펙트가 아군 캐릭터를 다시 관통하는 문제 수정


## v0.8.20
- 각성한 걍사람 공격 이펙트 7프레임 구성 적용
- Frame1~3 예열, Frame4~5 히트 시작, Frame6~7 최대 범위 적용
- Frame4 이후 위치는 Frame3 위치(center+40px)에 고정
- 상대 위치에 피격 이펙트 추가


### v0.8.21
걍슬라임 복구 확인: character_manifest.json, gacha.json, game.bundle.js(BASE_DATA/GACHA_DATA), assets/characters/slimecute, assets/effects/slimecute 포함.


### v0.8.22
각성한 걍사람 공격 이펙트 5프레임 버전 적용. 슬라임 데이터 유지.


### v0.8.27
- 크리티컬 배수 min/max 랜덤 적용 및 진한 빨간색 치명타 표시 반영.


### v0.8.28 hotfix
- 공격 시 멈춤 현상을 수정했습니다.
- 크리티컬 배수는 character.json의 critDamageMin~critDamageMax 범위에서 랜덤 적용됩니다.


## v1.0.0 Data-Driven 구조
캐릭터 추가/수정은 assets/characters/<key>/character.json과 data/character_manifest.json 중심으로 처리됩니다. 기존 필드도 호환됩니다.
