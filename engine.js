// test-1 engine core: NLE clips, proxy URL, render stub, freemium gate, local JSON.
const Engine={clips:[],pro:false,
import(f){const u=URL.createObjectURL(f);this.clips.push({name:f.name,url:u,dur:0});document.querySelector('#pv').src=u;this.save();this.draw()},
split(){this.log('Split at playhead (stub: duplicates clip).');this.draw()},
caption(){this.log('Caption track +1 (stub).')},
grade(){this.log('Color grade +10% (stub).')},
export(px){if(px>720&&!this.pro){document.querySelector('#st').textContent='Pro 4K locked — freemium gate. Free 720p available.';return}document.querySelector('#st').textContent='Rendering '+px+'p via WASM graph (stub)…';setTimeout(()=>document.querySelector('#st').textContent='Done '+px+'p'+(px<=720?' (watermarked free)':' (clean pro)')+' — cloud queue next.',1200)},
log(m){document.querySelector('#st').textContent=m},
save(){try{localStorage.setItem('test1',JSON.stringify({n:this.clips.length}))}catch{}},
draw(){document.querySelector('#tl').textContent=this.clips.length?this.clips.length+' clip(s): '+this.clips.map(c=>c.name).join(', '):'No clips. Import to begin.'}};
document.addEventListener('DOMContentLoaded',()=>{document.querySelector('#imp').addEventListener('change',e=>{if(e.target.files[0])Engine.import(e.target.files[0])})});
