































function _0x3a74(){const _0x152c71=['.zip','6755OSJzKy','../command','Download\x20GitHub\x20repository\x20as\x20a\x20zip\x20file.','application/zip','6014816kryWpj','get','1494QAIMxr','103587OPbzWS','❌\x20Failed\x20to\x20download\x20the\x20repository.\x20Please\x20try\x20again\x20later.','test','24196FeAqGs','885gdplIu','1qboZAI','5178fIQcks','⚠️\x20Invalid\x20GitHub\x20link.','1896BzAoIX','match','190842sjpajy','\x0a*FILENAME:*\x20','/zipball','node-fetch','62710gHREze','git','Where\x20is\x20the\x20GitHub\x20link?\x0a\x0aExample:\x0a.gitclone\x20https://github.com/TraderAn-King/BEN_BOT-V1','HEAD','1311274zrlVVT'];_0x3a74=function(){return _0x152c71;};return _0x3a74();}function _0x3185(_0x1bdb1a,_0x1553a0){const _0x3a745b=_0x3a74();return _0x3185=function(_0x318572,_0xe5c86e){_0x318572=_0x318572-0xf3;let _0x23e7dc=_0x3a745b[_0x318572];return _0x23e7dc;},_0x3185(_0x1bdb1a,_0x1553a0);}const _0x15bf28=_0x3185;(function(_0x4fc62b,_0x1d35f5){const _0x513f0f=_0x3185,_0x231d64=_0x4fc62b();while(!![]){try{const _0x329dcf=parseInt(_0x513f0f(0xf5))/0x1*(parseInt(_0x513f0f(0x102))/0x2)+-parseInt(_0x513f0f(0xfa))/0x3+-parseInt(_0x513f0f(0xf3))/0x4*(-parseInt(_0x513f0f(0xf4))/0x5)+parseInt(_0x513f0f(0xf6))/0x6*(parseInt(_0x513f0f(0x104))/0x7)+parseInt(_0x513f0f(0x108))/0x8+-parseInt(_0x513f0f(0x10a))/0x9*(parseInt(_0x513f0f(0xfe))/0xa)+-parseInt(_0x513f0f(0x10b))/0xb*(parseInt(_0x513f0f(0xf8))/0xc);if(_0x329dcf===_0x1d35f5)break;else _0x231d64['push'](_0x231d64['shift']());}catch(_0x10cb54){_0x231d64['push'](_0x231d64['shift']());}}}(_0x3a74,0xaf687));const {cmd}=require(_0x15bf28(0x105)),axios=require('axios'),fetch=require(_0x15bf28(0xfd));cmd({'pattern':'gitclone','alias':[_0x15bf28(0xff)],'desc':_0x15bf28(0x106),'react':'📦','category':'downloader','filename':__filename},async(_0xd7e917,_0x1f19db,_0x250e17,{from:_0x48ce31,quoted:_0x29f94e,args:_0x1a3dc3,reply:_0x2d5f05})=>{const _0x3a1df0=_0x15bf28;if(!_0x1a3dc3[0x0])return _0x2d5f05(_0x3a1df0(0x100));if(!/^(https:\/\/)?github\.com\/.+/[_0x3a1df0(0x10d)](_0x1a3dc3[0x0]))return _0x2d5f05(_0x3a1df0(0xf7));try{let _0x2ef75b=/github\.com\/([^\/]+)\/([^\/]+)(?:\.git)?/i,[,_0x20101c,_0x1a4d3e]=_0x1a3dc3[0x0][_0x3a1df0(0xf9)](_0x2ef75b)||[];if(!_0x20101c||!_0x1a4d3e)throw new Error('Invalid\x20GitHub\x20URL.');let _0x17e872='https://api.github.com/repos/'+_0x20101c+'/'+_0x1a4d3e+_0x3a1df0(0xfc),_0x5021d1=await fetch(_0x17e872,{'method':_0x3a1df0(0x101)}),_0x1c74b=_0x5021d1['headers'][_0x3a1df0(0x109)]('content-disposition')['match'](/filename=(.*)/)[0x1];_0x2d5f05('*📥\x20DOWNLOADING\x20REPOSITORY...*\x0a\x0a*REPOSITORY:*\x20'+_0x20101c+'/'+_0x1a4d3e+_0x3a1df0(0xfb)+_0x1c74b+'\x0a\x0a>\x20*BY\x20MAFIA-MD*'),await _0xd7e917['sendMessage'](_0x48ce31,{'document':{'url':_0x17e872},'fileName':_0x1c74b+_0x3a1df0(0x103),'mimetype':_0x3a1df0(0x107)},{'quoted':_0x1f19db});}catch(_0x4aab47){console['error'](_0x4aab47),_0x2d5f05(_0x3a1df0(0x10c));}});
