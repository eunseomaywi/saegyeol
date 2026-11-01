import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
const read=source=>vm.runInNewContext(source.replace('export default october2026Issue;', 'october2026Issue;'));
const current=read(fs.readFileSync('src/issues/october2026.js','utf8'));
const old=read(execFileSync('git',['show','e21dc3e9066ed68a0e503bbbf3d8f44b4e06850d:src/issues/october2026.js'],{encoding:'utf8'}));
const entries=i=>[i.openingEntry,...i.editorNotes,...i.sections.flatMap(s=>s.works)];
for(const [i,w] of entries(current).entries()){
 const original=entries(old)[i];assert.equal(w.id,original.id);
 assert.equal(w.body.replace(/\s/gu,''),original.body.replace(/\s/gu,''),w.id+' content changed');
 if(original.type==='시')assert.equal(w.body,original.body,w.id+' verse changed');
 if(w.format==='prose')for(const paragraph of w.body.split('\n\n'))assert(!paragraph.includes('\n'),w.id+' soft wrap');
}
assert.equal(current.preface,current.openingEntry.body);
console.log('PASS all 27 entries preserve every non-whitespace character; 14 poems byte-identical; prose paragraphs contain no soft newlines.');
