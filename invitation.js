const wedding = new Date('2027-03-13T15:00:00+03:00');
function updateCountdown(){const n=Math.max(0,wedding-Date.now());document.getElementById('timer').textContent=[Math.floor(n/864e5),Math.floor(n/36e5)%24,Math.floor(n/6e4)%60,Math.floor(n/1e3)%60].map(x=>String(x).padStart(2,'0')).join(' : ');}updateCountdown();setInterval(updateCountdown,1000);
for(const section of document.querySelectorAll('.section')) section.style.setProperty('--section-height',section.style.height);
function fit(){document.querySelector('main').style.setProperty('--scale',Math.min(1,innerWidth/600));}fit();addEventListener('resize',fit);
document.querySelector('form').addEventListener('submit',()=>{const status=document.getElementById('form-status');status.hidden=false;status.textContent='Подтвердите отправку в открывшейся вкладке Google.';});
// The existing Google Form has no vodka option; retain it in its comments field.
document.querySelector('form').addEventListener('formdata',event=>{const data=event.formData;const drinks=data.getAll('entry.2027775139');if(drinks.includes('Водка')){data.delete('entry.2027775139');drinks.filter(value=>value!=='Водка').forEach(value=>data.append('entry.2027775139',value));const comment=data.get('entry.1607820117')||'';data.set('entry.1607820117',[comment,'Предпочтение по алкоголю: водка.'].filter(Boolean).join('\n'));}});
