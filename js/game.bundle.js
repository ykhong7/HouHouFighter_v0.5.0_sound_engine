const BASE_DATA={"normal_man": {"id": 1, "key": "normal_man", "name": "걍사람", "grade": "NORMAL", "hp": 90, "atk": 10, "def": 20, "attackSpeed": 1, "attackArea": 45, "attackRange": 85, "moveSpeed": 95, "bodyRadius": 48, "stopGap": 16, "critRate": 0.15, "critDamage": 1.8, "attackType": "melee", "frameSize": 96, "spritePath": "assets/characters/normal_man/", "effectPath": "assets/effects/normal_man/attack.png", "effectFrames": 5, "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "soundPath": "assets/sounds/normal_man/"}, "meongdungi": {"id": 2, "key": "meongdungi", "name": "멍둥이", "grade": "NORMAL", "hp": 90, "atk": 15, "def": 20, "attackSpeed": 1, "attackArea": 60, "attackRange": 220, "moveSpeed": 70, "bodyRadius": 48, "stopGap": 16, "critRate": 0.15, "critDamage": 1.5, "attackType": "projectile", "projectilePath": "assets/projectiles/meongdungi/stone.png", "projectileSpeed": 520, "frameSize": 96, "spritePath": "assets/characters/meongdungi/", "effectPath": "assets/effects/meongdungi/attack.png", "effectFrames": 5, "gachaRate": 15, "attackMethod": "입에서 돌맹이가 나옴", "feature": "네발로 기어다님", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "soundPath": "assets/sounds/meongdungi/"}, "gomangi": {"id": 3, "key": "gomangi", "name": "고망이", "grade": "RARE", "hp": 90, "atk": 20, "def": 50, "damageReduction": 0.1, "attackSpeed": 1, "attackArea": 45, "attackRange": 100, "moveSpeed": 70, "bodyRadius": 64, "stopGap": 16, "critRate": 0.15, "critDamage": 1.5, "attackType": "melee", "frameSize": 96, "spritePath": "assets/characters/gomangi/", "effectPath": "assets/effects/gomangi/attack.png", "effectFrames": 5, "gachaRate": 10, "attackMethod": "주먹을 위에서 아래로 내려친다", "feature": "받은 공격의 피해를 10% 감소", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "soundPath": "assets/sounds/gomangi/"}, "eungae": {"id": 4, "key": "eungae", "name": "응애", "grade": "NORMAL", "hp": 70, "atk": 5, "def": 10, "attackSpeed": 2, "attackArea": 60, "attackRange": 300, "moveSpeed": 70, "bodyRadius": 36, "stopGap": 16, "critRate": 0.15, "critDamage": 1.5, "attackType": "projectile", "projectilePath": "assets/projectiles/eungae/candy.png", "projectileSpeed": 620, "frameSize": 96, "spritePath": "assets/characters/eungae/", "effectPath": "assets/effects/eungae/attack.png", "effectFrames": 5, "gachaRate": 15, "attackMethod": "입에서 사탕을 뱉음", "feature": "작고 귀여움", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "soundPath": "assets/sounds/eungae/"}, "awakened_normal_man": {"id": 5, "key": "awakened_normal_man", "name": "각성한 걍사람", "grade": "SPECIAL", "hp": 100, "atk": 50, "def": 80, "attackSpeed": 2, "attackArea": 70, "attackRange": 160, "moveSpeed": 120, "bodyRadius": 56, "stopGap": 18, "critRate": 0.15, "critDamage": 1.5, "attackType": "melee", "frameSize": 96, "spritePath": "assets/characters/awakened_normal_man/", "effectPath": "assets/effects/awakened_normal_man/attack.png", "effectFrames": 6, "gachaRate": 5, "attackMethod": "온몸에서 강력한 기를 방출", "feature": "몸에 불꽃모양의 기가 아지랑이 처럼 나옴", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "soundPath": "assets/sounds/awakened_normal_man/"}, "bokjujok": {"id": 6, "key": "bokjujok", "name": "폭주족", "grade": "EPIC", "hp": 60, "atk": 25, "def": 40, "attackSpeed": 4, "attackArea": 45, "attackRange": 90, "moveSpeed": 120, "bodyRadius": 48, "stopGap": 16, "critRate": 0.15, "critDamage": 1.5, "attackType": "melee", "frameSize": 96, "spritePath": "assets/characters/bokjujok/", "effectPath": "assets/effects/bokjujok/attack.png", "effectFrames": 6, "gachaRate": 10, "attackMethod": "손이 여러 개 보이도록 공격", "feature": "공격시 손이 와다다다하는 느낌", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "aiType": "rush", "soundPath": "assets/sounds/bokjujok/"}, "jjabbeorin": {"id": 7, "key": "jjabbeorin", "name": "짭버린", "grade": "EPIC", "hp": 60, "atk": 25, "def": 50, "attackSpeed": 4, "attackArea": 45, "attackRange": 90, "moveSpeed": 90, "bodyRadius": 48, "stopGap": 16, "critRate": 0.15, "critDamage": 1.5, "attackType": "melee", "frameSize": 96, "spritePath": "assets/characters/jjabbeorin/", "effectPath": "assets/effects/jjabbeorin/attack.png", "effectFrames": 6, "gachaRate": 10, "attackMethod": "손등에 튀어나온 칼날손톱으로 공격", "feature": "칼날손톱은 바람을 가로지르듯 파란색으로 표현", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "aiType": "rush", "soundPath": "assets/sounds/jjabbeorin/"}, "storm_spirit": {"id": 8, "key": "storm_spirit", "name": "폭풍정령", "grade": "LEGENDARY", "hp": 60, "atk": 35, "def": 80, "attackSpeed": 5, "attackArea": 70, "attackRange": 260, "moveSpeed": 120, "bodyRadius": 56, "stopGap": 18, "critRate": 0.15, "critDamage": 1.5, "attackType": "projectile", "projectilePath": "assets/projectiles/storm_spirit/tornado.png", "projectileSpeed": 680, "projectileFrames": 6, "frameSize": 96, "spritePath": "assets/characters/storm_spirit/", "effectPath": "assets/effects/storm_spirit/attack.png", "effectFrames": 6, "gachaRate": 5, "attackMethod": "강력한 회오리를 발사", "feature": "머리에 바닷빛의 회오리가 돌고있고, 진한파란색의 큰 회오리를 발사", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "aiType": "projectile", "soundPath": "assets/sounds/storm_spirit/"}, "vampire_king": {"id": 9, "key": "vampire_king", "name": "뱀파이어킹", "grade": "SUPER EPIC", "hp": 50, "atk": 35, "def": 50, "attackSpeed": 2, "attackArea": 90, "attackRange": 300, "moveSpeed": 120, "bodyRadius": 56, "stopGap": 18, "critRate": 0.15, "critDamage": 1.5, "attackType": "projectile", "projectilePath": "assets/projectiles/vampire_king/blood_wave.png", "projectileSpeed": 580, "projectileFrames": 6, "lifeSteal": 0.2, "frameSize": 96, "spritePath": "assets/characters/vampire_king/", "effectPath": "assets/effects/vampire_king/attack.png", "effectFrames": 6, "gachaRate": 5, "attackMethod": "술잔에 든 진한 빨간 피를 흩뿌린다", "feature": "최종 데미지의 20%를 체력으로 회복", "animations": {"idle": 2, "walk": 4, "attack": 3, "hit": 1, "dead": 2}, "aiType": "projectile", "soundPath": "assets/sounds/vampire_king/"}};
const GACHA_DATA={"pool": [{"key": "normal_man", "rate": 18}, {"key": "meongdungi", "rate": 19}, {"key": "eungae", "rate": 14}, {"key": "gomangi", "rate": 10}, {"key": "bokjujok", "rate": 10}, {"key": "jjabbeorin", "rate": 10}, {"key": "awakened_normal_man", "rate": 5}, {"key": "storm_spirit", "rate": 5}, {"key": "vampire_king", "rate": 5}]};

function loadImage(src){return new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=src;});}
function inRect(p,r){return p.x>=r.x&&p.x<=r.x+r.w&&p.y>=r.y&&p.y<=r.y+r.h;}
function gradeColor(g){return g==='SPECIAL'?'rainbow':g==='SUPER EPIC'?'super':(g==='LEGEND'||g==='LEGENDARY')?'#d49a00':g==='EPIC'?'#7d3cff':g==='RARE'?'#2d6cdf':'#555';}

class Assets{
 async load(){
  this.bg=await loadImage('assets/bg/wasteland_sketch.png');
  this.characters={};
  for(const key of Object.keys(BASE_DATA)){
   const d={...BASE_DATA[key],animations:{...BASE_DATA[key].animations}};
   d.sprites={};
   for(const st of Object.keys(d.animations)) d.sprites[st]=await loadImage(d.spritePath+st+'.png');
   d.effectImage=await loadImage(d.effectPath);
   if(d.projectilePath)d.projectileImage=await loadImage(d.projectilePath);
   this.characters[key]=d;
  }
 }
 create(key){const s=this.characters[key];return {...s,animations:{...s.animations},sprites:s.sprites,effectImage:s.effectImage,projectileImage:s.projectileImage};}
 keys(){return Object.keys(this.characters);}
}

class Gacha{
 roll(exclude=[]){
let pool=GACHA_DATA.pool.filter(it=>!exclude.includes(it.key));
if(pool.length===0)pool=GACHA_DATA.pool;
let total=pool.reduce((a,b)=>a+b.rate,0),r=Math.random()*total,acc=0;
for(const it of pool){acc+=it.rate;if(r<=acc)return it.key;}
return pool[0].key;
}
}


class AudioManager{
 constructor(){this.enabled=true;this.volume=.45;this.cache={};this.unlocked=false;}
 async load(){
  const files=[
   'assets/sounds/system/click.wav','assets/sounds/system/gacha.wav','assets/sounds/system/card_flip.wav',
   'assets/sounds/system/battle_start.wav','assets/sounds/system/victory.wav','assets/sounds/system/defeat.wav','assets/sounds/system/crit.wav'
  ];
  for(const key of Object.keys(BASE_DATA)){
   const p=BASE_DATA[key].soundPath||('assets/sounds/'+key+'/');
   files.push(p+'attack.wav');files.push(p+'hit.wav');
  }
  for(const f of files)this.cache[f]=this.makePool(f,4);
 }
 makePool(src,n){let arr=[];for(let i=0;i<n;i++){let a=new Audio(src);a.volume=this.volume;arr.push(a);}return arr;}
 unlock(){if(this.unlocked)return;this.unlocked=true;this.play('assets/sounds/system/click.wav');}
 setEnabled(v){this.enabled=v;}
 toggle(){this.enabled=!this.enabled;return this.enabled;}
 play(src){if(!this.enabled||!src)return;const pool=this.cache[src]||this.makePool(src,3);this.cache[src]=pool;const a=pool.find(x=>x.paused)||pool[0];try{a.currentTime=0;a.volume=this.volume;a.play().catch(()=>{});}catch(e){}}
 system(name){this.play('assets/sounds/system/'+name+'.wav');}
 attack(unit){this.play((unit.soundPath||('assets/sounds/'+unit.key+'/'))+'attack.wav');}
 hit(unit,crit=false){this.play(crit?'assets/sounds/system/crit.wav':((unit.soundPath||('assets/sounds/'+unit.key+'/'))+'hit.wav'));}
}

class Button{
 constructor(x,y,w,h,label,fn){Object.assign(this,{x,y,w,h,label,fn});}
 draw(c){c.save();c.fillStyle='rgba(255,255,255,.88)';c.fillRect(this.x,this.y,this.w,this.h);c.strokeStyle='#111';c.lineWidth=2;c.strokeRect(this.x,this.y,this.w,this.h);c.fillStyle='#111';c.font='20px sans-serif';c.textAlign='center';c.fillText(this.label,this.x+this.w/2,this.y+32);c.restore();}
}

class Effects{
 constructor(){this.items=[];this.heals=[];this.shake=0;this.hitStop=0;}
 spawn(target,attacker,dmg,crit){this.items.push({x:target.x-attacker.dir*18,y:target.y-25,dmg,crit,img:attacker.effectImage,frames:attacker.effectFrames||5,t:0,l:crit?.55:.4,key:attacker.key});this.shake=crit?.22:.12;this.hitStop=crit?.06:.035;}
 update(dt){let rd=dt;if(this.hitStop>0){this.hitStop-=dt;dt=0;}for(const e of this.items)e.t+=rd;this.items=this.items.filter(e=>e.t<e.l);for(const h of this.heals)h.t+=rd;this.heals=this.heals.filter(h=>h.t<h.l);if(this.shake>0)this.shake-=rd;}spawnHeal(x,y,amount){if(amount>0)this.heals.push({x,y,amount,t:0,l:.65});}
 offset(){return this.shake>0?{x:(Math.random()-.5)*10,y:(Math.random()-.5)*6}:{x:0,y:0};}
 frozen(){return this.hitStop>0;}
 draw(c){for(const h of this.heals){let p=h.t/h.l;c.save();c.globalAlpha=1-p;c.fillStyle='#118833';c.font='bold 22px sans-serif';c.textAlign='center';c.fillText('+'+h.amount,h.x,h.y-95-p*35);c.restore();}for(const e of this.items){let p=e.t/e.l,fr=Math.min((e.frames||5)-1,Math.floor(p*(e.frames||5)));c.save();c.globalAlpha=1-p*.25;if(e.img)c.drawImage(e.img,fr*96,0,96,96,e.x-48,e.y-58,120,120);if(e.key==='jjabbeorin'){c.globalAlpha=.75-p*.5;c.strokeStyle='#2f8cff';c.lineWidth=4;for(let s=0;s<3;s++){c.beginPath();c.moveTo(e.x-55+fr*8,e.y-35+s*20);c.quadraticCurveTo(e.x,e.y-65+s*8,e.x+55-fr*4,e.y-15+s*18);c.stroke();}}c.fillStyle='#111';c.font=e.crit?'bold 32px sans-serif':'bold 22px sans-serif';c.textAlign='center';c.fillText((e.crit?'CRIT ':'')+'-'+e.dmg,e.x,e.y-75-p*45);c.restore();}}
}

class Projectile{
 constructor(owner,target,audio=null){this.o=owner;this.t=target;this.audio=audio;this.x=owner.x+owner.dir*50;this.y=owner.y-45;this.vx=owner.dir*(owner.projectileSpeed||500);this.dead=false;this.img=owner.projectileImage;}
 update(dt,effects){this.x+=this.vx*dt;if(Math.abs(this.x-this.t.x)<25){this.dead=true;let dmg=Math.max(1,Math.round(this.o.atk*(100/(100+this.t.def))));let crit=Math.random()<(this.o.critRate||0);if(crit)dmg=Math.round(dmg*(this.o.critDamage||1.5));let final=this.t.damage(dmg,crit);if(this.o.lifeSteal){let heal=Math.max(1,Math.round(final*this.o.lifeSteal));this.o.hp=Math.min(this.o.maxHp,this.o.hp+heal);effects.spawnHeal(this.o.x,this.o.y,heal);}if(this.audio)this.audio.hit(this.t,crit);effects.spawn(this.t,this.o,final,crit);}if(this.x<0||this.x>1280)this.dead=true;}
 draw(c){if(this.img){let frames=this.o.projectileFrames||1;let fr=Math.floor(Date.now()/80)%frames;c.drawImage(this.img,fr*96,0,96,96,this.x-42,this.y-34,90,68);}}
}

class Fighter{
 constructor(d,x,dir){Object.assign(this,d);this.x=x;this.y=505;this.dir=dir;this.maxHp=this.hp;this.state='idle';this.frame=0;this.anim=0;this.attackTimer=.25;this.hitTimer=0;this.knock=0;this.flash=0;this.isDead=false;}
 update(dt){if(this.hp<=0){this.hp=0;this.isDead=true;this.state='dead';}this.anim+=dt;let cnt=this.animations[this.state]||1,sp=this.state==='walk'?8:this.state==='attack'?12:3;this.frame=Math.floor(this.anim*sp)%cnt;if(this.hitTimer>0)this.hitTimer-=dt;if(this.flash>0)this.flash-=dt;if(this.knock>0)this.knock=Math.max(0,this.knock-dt*90);}
 damage(v,crit){let final=Math.max(1,Math.round(v*(1-(this.damageReduction||0))));this.hp=Math.max(0,this.hp-final);this.hitTimer=.15;this.flash=crit?.18:.1;this.knock=crit?26:14;if(this.hp>0)this.state='hit';return final;}
 draw(c,debug,hidden=false){c.save();c.fillStyle='rgba(0,0,0,.12)';c.beginPath();c.ellipse(this.x,this.y+42,45,12,0,0,6.28);c.fill();if(hidden){this.drawHidden(c);c.restore();return;}this.hpbar(c);if(debug)this.debug(c);let img=this.sprites[this.state]||this.sprites.idle;c.translate(this.x-this.dir*this.knock,this.y);c.scale(this.dir,1);if(img)c.drawImage(img,this.frame*this.frameSize,0,this.frameSize,this.frameSize,-96,-118,192,192);if(this.flash>0){c.globalAlpha=Math.min(.65,this.flash*5);c.fillStyle='#fff';c.globalCompositeOperation='source-atop';c.fillRect(-96,-118,192,192);}c.restore();}
 drawHidden(c){c.save();c.textAlign='center';c.fillStyle='rgba(255,255,255,.95)';c.fillRect(this.x-65,this.y-150,130,150);c.strokeStyle='#111';c.lineWidth=3;c.strokeRect(this.x-65,this.y-150,130,150);c.fillStyle='#111';c.font='bold 86px sans-serif';c.fillText('?',this.x,this.y-45);c.font='18px sans-serif';c.fillText('상대 미공개',this.x,this.y-15);c.restore();}
 hpbar(c){c.save();let gc=gradeColor(this.grade);c.textAlign='center';c.fillStyle='rgba(255,255,255,.92)';c.fillRect(this.x-86,this.y-158,172,58);if(gc==='rainbow'){let colors=['#ff3b3b','#ff9f1c','#ffe600','#2ecc71','#3498db','#8e44ad'];for(let i=0;i<colors.length;i++){c.strokeStyle=colors[i];c.lineWidth=3;c.strokeRect(this.x-86+i*2,this.y-158+i*2,172-i*4,58-i*4);}}
else if(gc==='super'){let colors=['#8e44ad','#b00020','#8e44ad','#b00020'];for(let i=0;i<colors.length;i++){c.strokeStyle=colors[i];c.lineWidth=3;c.strokeRect(this.x-86+i*3,this.y-158+i*3,172-i*6,58-i*6);}}
else{c.strokeStyle=gc;c.lineWidth=3;c.strokeRect(this.x-86,this.y-158,172,58);}c.fillStyle=gc==='rainbow'?'#d43cff':gc==='super'?'#8b0000':gc;c.font='bold 13px sans-serif';c.fillText(this.grade||'NORMAL',this.x,this.y-139);c.fillStyle='#111';let text=this.name+(this.damageReduction?' 🛡':'')+' ATK:'+this.atk;c.font=text.length>14?'14px sans-serif':'19px sans-serif';c.fillText(text,this.x,this.y-119);c.strokeStyle='#111';c.lineWidth=2;c.strokeRect(this.x-60,this.y-108,120,16);c.fillStyle='#fff';c.fillRect(this.x-58,this.y-106,116,12);c.fillStyle='#111';c.fillRect(this.x-58,this.y-106,116*(this.hp/this.maxHp),12);c.fillStyle='#fff';c.font='13px sans-serif';c.fillText(this.hp+'/'+this.maxHp,this.x,this.y-94);c.restore();}
 debug(c){c.save();c.strokeStyle='rgba(255,0,0,.5)';c.setLineDash([6,5]);c.beginPath();c.arc(this.x,this.y,this.attackRange,0,6.28);c.stroke();c.restore();}
}

class Battle{
 constructor(a,e,audio=null){this.a=a;this.e=e;this.audio=audio;this.playerKey=null;this.enemyKey=null;this.win=0;this.lose=0;this.projectiles=[];this.state='select';this.running=false;}
 setSelection(playerKey,enemyKey){this.playerKey=playerKey;this.enemyKey=enemyKey;this.reset(false);}
 reset(start=false){if(!this.playerKey)return;this.player=new Fighter(this.a.create(this.playerKey),230,1);this.enemy=new Fighter(this.a.create(this.enemyKey),1040,-1);this.projectiles=[];this.state=start?'approach':'ready';this.running=start;}
 start(){if(this.playerKey)this.reset(true);}
 update(dt){if(!this.playerKey)return;if(!this.running){this.player.update(dt);this.enemy.update(dt);return;}if(this.e.frozen())return;if(this.player.isDead||this.enemy.isDead){if(this.state!=='finished'){this.player.isDead?this.lose++:this.win++;if(this.audio)this.audio.system(this.player.isDead?'defeat':'victory');}this.state='finished';this.running=false;}this.unit(this.player,this.enemy,dt);this.unit(this.enemy,this.player,dt);this.projectiles.forEach(p=>p.update(dt,this.e));this.projectiles=this.projectiles.filter(p=>!p.dead);this.prevent();this.player.update(dt);this.enemy.update(dt);}
 stop(u,t){return Math.max(u.attackRange,(u.bodyRadius||48)+(t.bodyRadius||48)+Math.max(u.stopGap||0,t.stopGap||0));}
 calc(u,t){let dmg=Math.max(1,Math.round(u.atk*(100/(100+t.def))));let crit=Math.random()<(u.critRate||0);if(crit)dmg=Math.round(dmg*(u.critDamage||1.5));return {dmg,crit};}
 unit(u,t,dt){if(!this.running||u.isDead||t.isDead)return;if(u.state==='hit'&&u.hitTimer>0)return;let dist=Math.abs(t.x-u.x);if(dist>this.stop(u,t)){u.state='walk';u.x+=u.dir*u.moveSpeed*dt;return;}u.state='attack';u.attackTimer-=dt;if(u.attackTimer<=0){u.attackTimer=1/u.attackSpeed;if(this.audio)this.audio.attack(u);if(u.attackType==='projectile')this.projectiles.push(new Projectile(u,t,this.audio));else{let r=this.calc(u,t);let final=t.damage(r.dmg,r.crit);if(u.lifeSteal){let heal=Math.max(1,Math.round(final*u.lifeSteal));u.hp=Math.min(u.maxHp,u.hp+heal);this.e.spawnHeal(u.x,u.y,heal);}if(this.audio)this.audio.hit(t,r.crit);this.e.spawn(t,u,final,r.crit);}}}
 prevent(){let m=(this.player.bodyRadius||48)+(this.enemy.bodyRadius||48)+Math.max(this.player.stopGap||0,this.enemy.stopGap||0),d=Math.abs(this.enemy.x-this.player.x);if(d<m){let p=(m-d)/2;this.player.x-=p;this.enemy.x+=p;}}
 draw(c,debug){
if(!this.playerKey){
 c.save();
 c.fillStyle='rgba(255,255,255,.88)';
 c.fillRect(24,20,390,126);
 c.strokeStyle='#111';
 c.strokeRect(24,20,390,126);
 c.fillStyle='#111';
 c.font='bold 18px sans-serif';
 c.fillText('전투 정보',45,47);
 c.font='17px sans-serif';
 c.fillText('상태: 캐릭터 선택 전',45,75);
 c.fillText('3회 뽑기 후 카드 1장을 선택하세요',45,102);
 c.fillText('상대는 전투 시작 전까지 비공개',45,129);
 c.restore();
 return;
}
this.player.draw(c,debug,false);this.enemy.draw(c,debug,this.state!=='approach'&&this.state!=='finished'&&this.running===false);this.projectiles.forEach(p=>p.draw(c));c.save();c.fillStyle='rgba(255,255,255,.88)';c.fillRect(24,20,390,126);c.strokeStyle='#111';c.strokeRect(24,20,390,126);c.fillStyle='#111';c.font='bold 18px sans-serif';c.fillText('전투 정보',45,47);c.font='17px sans-serif';c.fillText('승: '+this.win+'  패: '+this.lose,45,75);c.fillText('상태: '+this.state,45,102);c.fillText('선택: '+this.player.name+' ['+(this.player.grade||'NORMAL')+']',45,129);c.restore();if(this.state==='finished'){c.fillStyle='rgba(255,255,255,.85)';c.fillRect(470,105,340,85);c.strokeStyle='#111';c.strokeRect(470,105,340,85);c.fillStyle='#111';c.font='28px sans-serif';c.fillText(this.player.isDead?'패배':'승리',610,145);}}
}

class GachaDraft{
 constructor(gacha,assets){this.gacha=gacha;this.assets=assets;this.reset();}
 reset(){this.rolls=[];this.selected=null;this.anim=0;this.revealIndex=-1;}
 canRoll(){return this.rolls.length<3&&!this.selected;}
 roll(){if(!this.canRoll())return null;let key=this.gacha.roll(this.rolls);this.rolls.push(key);this.anim=.55;this.revealIndex=this.rolls.length-1;return key;}
 choose(i){if(this.rolls[i]&&!this.selected){this.selected=this.rolls[i];return this.selected;}return null;}
 update(dt){if(this.anim>0)this.anim-=dt;}
 drawCard(c,x,y,w,h,key,i){let d=this.assets.characters[key];let selected=this.selected===key;let gc=gradeColor(d.grade);c.save();c.fillStyle=selected?'rgba(255,245,190,.95)':'rgba(255,255,255,.92)';c.fillRect(x,y,w,h);if(gc==='rainbow'){let colors=['#ff3b3b','#ff9f1c','#ffe600','#2ecc71','#3498db','#8e44ad'];for(let j=0;j<colors.length;j++){c.strokeStyle=colors[j];c.strokeRect(x+j*2,y+j*2,w-j*4,h-j*4);}}else{c.strokeStyle=gc;c.lineWidth=3;c.strokeRect(x,y,w,h);}let scale=(this.revealIndex===i&&this.anim>0)?1+Math.sin((.55-this.anim)*16)*.08:1;let img=d.sprites.idle;if(img)c.drawImage(img,0,0,96,96,x+w/2-48*scale,y+30,96*scale,96*scale);c.fillStyle='#111';c.textAlign='center';c.font='bold 16px sans-serif';c.fillText(d.grade,x+w/2,y+22);c.font=d.name.length>7?'16px sans-serif':'20px sans-serif';c.fillText(d.name,x+w/2,y+150);c.font='14px sans-serif';c.fillText('ATK '+d.atk+' / HP '+d.hp,x+w/2,y+174);c.fillText(i+1+'번 카드',x+w/2,y+198);if(selected){c.font='bold 18px sans-serif';c.fillText('선택됨',x+w/2,y+225);}c.restore();}
 draw(c){c.save();c.fillStyle='rgba(255,255,255,.88)';c.fillRect(285,150,710,300);c.strokeStyle='#111';c.lineWidth=3;c.strokeRect(285,150,710,300);c.fillStyle='#111';c.textAlign='center';c.font='28px sans-serif';c.fillText('3회 뽑기 - 1명 선택',640,188);c.font='16px sans-serif';c.fillText('뽑기는 최대 3번, 카드 하나를 선택하면 상대는 랜덤 확정됩니다.',640,215);for(let i=0;i<3;i++){let x=330+i*210,y=235,w=170,h=200;if(this.rolls[i])this.drawCard(c,x,y,w,h,this.rolls[i],i);else{c.fillStyle='rgba(255,255,255,.7)';c.fillRect(x,y,w,h);c.strokeStyle='#777';c.strokeRect(x,y,w,h);c.fillStyle='#999';c.font='bold 60px sans-serif';c.fillText('?',x+w/2,y+115);}}c.restore();}
}


class ProfileGrid{
 constructor(assets){this.assets=assets;this.visible=false;}
 open(){this.visible=true;}
 close(){this.visible=false;}
 draw(c){
  if(!this.visible)return;
  c.save();
  c.fillStyle='rgba(255,255,255,.96)';
  c.fillRect(120,70,1040,560);
  c.strokeStyle='#111';
  c.lineWidth=3;
  c.strokeRect(120,70,1040,560);
  c.fillStyle='#111';
  c.textAlign='center';
  c.font='bold 30px sans-serif';
  c.fillText('등록 캐릭터 프로필',640,112);
  const keys=Object.keys(this.assets.characters);
  const startX=170,startY=145,w=170,h=210,gap=20;
  keys.forEach((key,i)=>{
    const d=this.assets.characters[key];
    const col=i%5,row=Math.floor(i/5);
    const x=startX+col*(w+gap),y=startY+row*(h+gap);
    let gc=gradeColor(d.grade);
    c.fillStyle='rgba(255,255,255,.92)';
    c.fillRect(x,y,w,h);
    if(gc==='rainbow'){
      let colors=['#ff3b3b','#ff9f1c','#ffe600','#2ecc71','#3498db','#8e44ad'];
      colors.forEach((cl,j)=>{c.strokeStyle=cl;c.lineWidth=2;c.strokeRect(x+j*2,y+j*2,w-j*4,h-j*4);});
    }else if(gc==='super'){
      ['#8e44ad','#b00020','#8e44ad','#b00020'].forEach((cl,j)=>{c.strokeStyle=cl;c.lineWidth=2;c.strokeRect(x+j*2,y+j*2,w-j*4,h-j*4);});
    }else{
      c.strokeStyle=gc;c.lineWidth=3;c.strokeRect(x,y,w,h);
    }
    c.fillStyle=gc==='rainbow'?'#d43cff':gc==='super'?'#8b0000':gc;
    c.font='bold 13px sans-serif';
    c.fillText(d.grade||'NORMAL',x+w/2,y+20);
    const img=d.sprites.idle;
    if(img)c.drawImage(img,0,0,96,96,x+37,y+28,96,96);
    c.fillStyle='#111';
    c.font=d.name.length>7?'15px sans-serif':'18px sans-serif';
    c.fillText(d.name,x+w/2,y+140);
    c.font='13px sans-serif';
    c.fillText('HP '+d.hp+'  ATK '+d.atk,x+w/2,y+162);
    c.fillText('DEF '+d.def+'  SPD '+d.attackSpeed,x+w/2,y+182);
    c.fillText(d.attackType==='projectile'?'원거리':'근접',x+w/2,y+202);
  });
  c.fillStyle='rgba(255,255,255,.92)';
  c.fillRect(1015,86,120,42);
  c.strokeStyle='#111';
  c.strokeRect(1015,86,120,42);
  c.fillStyle='#111';
  c.font='20px sans-serif';
  c.fillText('닫기',1075,114);
  c.restore();
 }
 handleClick(p){
  if(!this.visible)return false;
  if(p.x>=1015&&p.x<=1135&&p.y>=86&&p.y<=128){this.close();return true;}
  if(p.x>=120&&p.x<=1160&&p.y>=70&&p.y<=630)return true;
  return false;
 }
}

class Game{
 constructor(){this.c=document.getElementById('game');this.ctx=this.c.getContext('2d');this.w=1280;this.h=720;this.c.width=this.w;this.c.height=this.h;this.assets=new Assets();this.gacha=new Gacha();this.debug=false;this.last=0;this.buttons=[];window.addEventListener('keydown',e=>{if(e.key==='F1'){e.preventDefault();this.debug=!this.debug;}if(e.code==='Space'&&this.battle)this.battle.start();});this.c.addEventListener('pointerdown',e=>this.click(e));this.resize();window.addEventListener('resize',()=>this.resize());this.start();}
 resize(){let s=Math.min(innerWidth/this.w,innerHeight/this.h);this.scale=s;this.c.style.width=this.w*s+'px';this.c.style.height=this.h*s+'px';}
 pos(e){let r=this.c.getBoundingClientRect();return {x:(e.clientX-r.left)/this.scale,y:(e.clientY-r.top)/this.scale};}
 click(e){let p=this.pos(e);if(this.profileGrid&&this.profileGrid.visible){this.profileGrid.handleClick(p);return;}for(const b of this.buttons)if(inRect(p,b))b.fn();for(let i=0;i<3;i++){let r={x:330+i*210,y:235,w:170,h:200};if(inRect(p,r)&&this.draft.rolls[i]&&!this.draft.selected){this.audio.system('card_flip');let key=this.draft.choose(i);let enemy=this.randomEnemy(key);this.battle.setSelection(key,enemy);}}}
 randomEnemy(playerKey){const keys=this.assets.keys().filter(k=>k!==playerKey);return keys[Math.floor(Math.random()*keys.length)]||playerKey;}
 async start(){this.ctx.fillStyle='#fff';this.ctx.fillRect(0,0,this.w,this.h);this.ctx.fillStyle='#111';this.ctx.font='30px sans-serif';this.ctx.fillText('리소스 로딩 중...',500,360);await this.assets.load();this.audio=new AudioManager();await this.audio.load();this.effects=new Effects();this.profileGrid=new ProfileGrid(this.assets);this.battle=new Battle(this.assets,this.effects,this.audio);this.draft=new GachaDraft(this.gacha,this.assets);this.buttons=[new Button(330,620,180,52,'뽑기',()=>{this.audio.unlock();this.audio.system('gacha');this.hideDraft=false;this.draft.roll();}),new Button(550,620,180,52,'전투 시작',()=>{this.audio.unlock();this.audio.system('battle_start');this.battle.start();this.hideDraft=true;}),new Button(770,620,180,52,'초기화',()=>{this.draft.reset();this.hideDraft=false;this.battle=new Battle(this.assets,this.effects,this.audio);}),new Button(1070,25,160,46,'캐릭터',()=>{this.audio.unlock();this.audio.system('click');this.profileGrid.open();}),new Button(1070,78,160,46,'사운드 ON',()=>{this.audio.unlock();this.audio.toggle();this.buttons[this.buttons.length-1].label=this.audio.enabled?'사운드 ON':'사운드 OFF';})];requestAnimationFrame(t=>this.loop(t));}
 loop(t){let dt=Math.min((t-this.last)/1000||0,.033);this.last=t;this.effects.update(dt);this.battle.update(dt);this.draft.update(dt);this.draw();requestAnimationFrame(tt=>this.loop(tt));}
 draw(){let c=this.ctx,off=this.effects.offset();c.clearRect(0,0,this.w,this.h);c.save();c.translate(off.x,off.y);if(this.assets.bg)c.drawImage(this.assets.bg,0,0);else{c.fillStyle='#fff';c.fillRect(0,0,this.w,this.h);}this.battle.draw(c,this.debug);this.effects.draw(c);c.restore();if(!this.hideDraft)this.draft.draw(c);this.buttons.forEach(b=>b.draw(c));c.fillStyle='rgba(255,255,255,.75)';c.fillRect(210,685,860,28);c.strokeStyle='#111';c.strokeRect(210,685,860,28);c.fillStyle='#111';c.textAlign='center';c.font='15px sans-serif';c.fillText('v0.5.0 | 사운드 엔진/SFX 추가 | 사운드 ON/OFF',640,705);c.textAlign='left';if(this.profileGrid)this.profileGrid.draw(c);}
}
window.onload=()=>new Game();
