# v0.8.26 - EffectRenderer 방향 반전 + 번개정령 JSON 정리

- EffectRenderer 자체에서 공격 방향에 따라 모든 공격 이펙트가 좌우 반전되도록 수정.
- 각성한 걍사람, 불꽃정령, 번개정령을 포함한 전체 캐릭터 공격 이펙트 방향에 공통 적용.
- 번개정령 `assets/characters/lightning_spirit/character.json` 추가/정리.
- 번개정령 특징 문구가 다른 정령과 중복되지 않도록 수정.
- v0.8.25의 각성한 걍사람 5프레임 전방 이펙트 유지.

# CHANGELOG

## v0.8.16 - 캐릭터창 UI 개선
- 캐릭터 프로필 창을 2 x 5 표시 방식으로 변경
- 캐릭터가 창 테두리 밖으로 나가지 않도록 페이지 방식 적용
- 이전/다음 버튼 추가
- 캐릭터 정렬 순서 적용: SPECIAL → LEGENDARY → SUPER EPIC → EPIC → RARE → NORMAL

# HouHou Fighter v0.8.8

- 번개정령 공격 이펙트/투사체 PNG의 격자 배경을 투명 처리
- 전투 종료 시 남아있는 투사체/공격 이펙트/회복·데미지 텍스트/히트스톱 제거
- 다음 전투 시작/전투 리셋 시 이펙트 매니저 초기화
- 개발 단계 뽑기 확률: 전체 캐릭터 10% 유지


## v0.8.9
- 신규 캐릭터 `꼬마정령` 추가
- 6프레임 보라/녹색 공격 이펙트 적용
- 50% 확률 2타 공격 및 15% 흡혈 특성 구현

## v0.8.11
- 꼬마정령 이동속도를 4로 변경
- 꼬마정령 PNG 스프라이트의 격자 배경 제거

- Added EPIC character 걍슬라임 (assets only placeholder). Stats: ATK90 DEF20 HP85 Move3 Range2 Paralysis1s.


## v0.8.13_slime_fixed
- 걍슬라임이 실제 캐릭터 목록/뽑기/전투 데이터에 누락되던 문제 수정
- assets/characters/slimecute/character.json 추가
- data/character_manifest.json, data/gacha.json 반영
- 전투 엔진 BASE_DATA에 걍슬라임 추가
- 공격 시 100% 확률 1초 마비 효과 적용


## v0.8.14 slime gacha fix
- Fixed embedded GACHA_DATA in js/game.bundle.js to include slimecute.
- Verified data/gacha.json, character_manifest.json, BASE_DATA all include 걍슬라임.

## v0.8.15_slime_grid_removed_paralyze_cooldown
- 걍슬라임 캐릭터 스프라이트의 격자/체커보드 배경을 투명 처리.
- 걍슬라임 마비 효과 조정: 1초 마비 적용 후 2초 동안 재마비 면역.
- 투사체/근접 공격 양쪽 마비 로직에 재마비 쿨타임 적용.


## v0.8.17 - 각성한 걍사람 이미지/중심 이펙트
- 각성한 걍사람 스프라이트 교체 및 격자 배경 제거
- 공격 이펙트를 4프레임으로 교체
- 각성한 걍사람 공격 이펙트가 대상 위치가 아니라 캐릭터 몸 중심에서 재생되도록 수정

## v0.8.18_awakened_idle_win_effect5
- 각성한 걍사람 idle 이미지 교체 및 격자 배경 제거 적용.
- 각성한 걍사람 win 이미지 교체 및 4프레임 96x96 스프라이트 시트로 정리.
- 공격 이펙트를 5프레임 이미지로 교체.
- 공격 이펙트 재생 순서를 1→2→3→4→4→5→5로 적용.


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


## v0.8.21 - 슬라임 복구
- 걍슬라임(slimecute)이 캐릭터 목록, 뽑기풀, 전투 데이터에서 누락되지 않도록 재검증 및 복구.
- 캐시 문제 방지를 위해 index.html의 JS/CSS 로딩에 v=0.8.21 버전 파라미터 추가.
- v0.8.20 각성한걍사람 7프레임 공격 이펙트/피격 이펙트 유지.


## v0.8.22
- 각성한 걍사람 공격 이펙트를 5프레임으로 교체.
- 위치: Frame1 center+0, Frame2 +20, Frame3 +40, Frame4 +40, Frame5 +96.
- Frame4부터 피격 이펙트 시작.
- 걍슬라임 캐릭터 및 뽑기 데이터 유지.


## v0.8.27 - Critical min/max balance
- 캐릭터 데이터의 크리티컬 배수를 critDamageMin / critDamageMax 구조로 변경
- 치명타 발생 시 min~max 사이 랜덤 배율 적용
- 치명타 데미지 표시 색상을 진한 빨간색(#8b0000)으로 변경
- 요청된 전체 캐릭터 파라미터 밸런스 반영


## v0.8.28
- 공격 시 멈춤 버그 수정: 누락된 critMultiplier() 함수 추가.
- critDamageMin/critDamageMax 기반 랜덤 크리티컬 배수 적용.
- 기존 진한 빨간색 크리티컬 데미지 표시 유지.


## v1.0.0 Data-Driven 리팩토링
- 캐릭터 데이터를 character_manifest.json + 각 캐릭터 character.json에서 우선 로드하도록 변경
- stats / critical / gacha / combat / skills / effect / projectile 섹션 추가
- 기존 flat 필드와 호환 유지
- 시작 화면 하단 우측에 Art by 홍은성 표시 추가
