/* 들빛교회 게시판 공용 데이터 (index · board 같이 씀) */
window.DB=(()=>{const K='deulbit_board_v3',VK='deulbit_views',AK='deulbit_admin';
const SEED=[{id:'s1',c:'공지',t:'12월 성탄 축하 예배 안내',b:'12월 25일(목) 오전 11시, 온 가족이 함께 드리는 성탄 예배가 있어요.\n예배 후 아이들 성탄 발표회와 떡 나눔이 있습니다.\n처음 오시는 분도 편하게 오세요!',d:'2026-11-22',pin:1,v:86},
{id:'s2',c:'주보',t:'11월 넷째 주 주보',b:'• 말씀: 쉼이 필요한 사람에게 (마태복음 11:28)\n• 찬양: 주님의 마음을 가진 자\n• 광고: 김장 나눔 봉사자 모집 (11/29 토 오전 10시)',d:'2026-11-23',v:41},
{id:'s6',c:'새가족',t:'이번 주 새가족을 소개합니다 · 정○○ 성도 가정',b:'율하로 이사 온 정○○ · 윤○○ 성도 가정과 아기 하린이가 들빛교회 가족이 되었어요.\n“아기와 함께 편하게 예배드릴 곳을 찾았어요.”\n다음 주일에 만나면 반갑게 인사해 주세요!',d:'2026-11-23',img:'img/pastor.jpg',v:57},
{id:'s11',c:'공지',t:'12월 교회 일정 한눈에 보기',b:'• 12/7 성찬 예배\n• 12/14 교회학교 성탄 발표 연습 (예배 후)\n• 12/21 이웃 초청 음악회 (오후 3시)\n• 12/25 성탄 축하 예배\n• 12/31 송구영신 예배 (밤 11시)',d:'2026-11-21',v:63},
{id:'s3',c:'소식',t:'동네 어르신 김장 나눔 함께해요',b:'11월 29일 토요일 오전 10시, 교회 지하 식당에서 김장을 담가 홀로 계신 어르신 30가정에 전해 드려요.\n앞치마만 챙겨 오세요.',d:'2026-11-20',v:38},
{id:'s4',c:'기도',t:'수능을 마친 고3 학생들을 위해',b:'시험을 마치고 새로운 길을 준비하는 청소년부 학생 6명을 위해 함께 기도해 주세요.',d:'2026-11-17',v:29},
{id:'s7',c:'앨범',t:'11월 셋째 주 · 주일 아침 풍경',b:'햇살 좋은 주일 아침, 할머니 손을 잡고 온 지우와 함께.',d:'2026-11-16',img:'img/welcome.jpg',v:74},
{id:'s8',c:'주보',t:'11월 셋째 주 주보',b:'• 말씀: 작은 일에 충성된 사람 (누가복음 16:10)\n• 찬양: 은혜 아니면\n• 광고: 수능 응원 간식 나눔 감사합니다',d:'2026-11-16',v:35},
{id:'s10',c:'소식',t:'수능 응원 간식 나눔을 마쳤어요',b:'장유고 · 율하고 앞에서 수험생 120명에게 따뜻한 차와 초콜릿을 나눴어요. 함께해 주신 성도님들 감사합니다.',d:'2026-11-12',v:44},
{id:'s9',c:'앨범',t:'가을 예배당 풍경',b:'창으로 들어오는 가을 햇살이 참 따뜻했던 주일이었어요.',d:'2026-11-09',img:'img/hero.jpg',v:52},
{id:'s12',c:'주보',t:'11월 둘째 주 주보',b:'• 말씀: 두려워하지 말라 (이사야 41:10)\n• 찬양: 내 영혼이 은총 입어',d:'2026-11-09',v:22},
{id:'s5',c:'공지',t:'주차장 이용 안내 (주일)',b:'주일 오전에는 건물 뒤 주차장이 붐벼요.\n율하 공영주차장(도보 3분)도 이용하실 수 있어요.',d:'2026-11-10',v:48}];
const CATS=['공지','주보','새가족','앨범','소식','기도'],IC={공지:'📢',주보:'📰',소식:'🌿',기도:'🙏',새가족:'🤝',앨범:'📷'},NM={공지:'공지사항',주보:'주보',소식:'교회 소식',기도:'기도 제목',새가족:'새가족 소개',앨범:'교회 앨범'};
const load=()=>{try{const v=JSON.parse(localStorage.getItem(K)||'null');return Array.isArray(v)?v:SEED.map(x=>({...x}))}catch(e){return SEED.map(x=>({...x}))}};
const save=a=>{try{localStorage.setItem(K,JSON.stringify(a))}catch(e){}};
const isAdm=()=>{try{return sessionStorage.getItem(AK)==='1'}catch(e){return false}},setAdm=v=>{try{v?sessionStorage.setItem(AK,'1'):sessionStorage.removeItem(AK)}catch(e){}};
const sort=a=>a.slice().sort((x,y)=>y.d.localeCompare(x.d));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const today=()=>{const n=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Seoul'}));return n.getFullYear()+'-'+String(n.getMonth()+1).padStart(2,'0')+'-'+String(n.getDate()).padStart(2,'0')};
const isNew=d=>(new Date(today())-new Date(d))/864e5<=3;
return{load,save,isAdm,setAdm,sort,esc,today,isNew,CATS,IC,NM}})();
