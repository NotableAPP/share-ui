$={make:(str)=>{return document.createElement(str);},sel:(str)=>{return document.querySelector(str);},all:(str)=>{	return document.querySelctorAll(str);}};if($.sel('meta[name=ted-globalmode]')){			metaMode=$.sel('meta[name=ted-globalmode]');}else{metaMode={content:'light'}}/* icons provided by iconscout.com icons page https://github.com/notableapp./share-ui/ico.md*/___global___={};var ___a$p$i___ = {blogger:{				    url:"http://www.blogger.com/blog-this.g?n=%title%&b=%text%&url=%url%",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 384 384"><rect width="384" height="384" fill="#f58220" rx="37" ry="37"/><path fill="#fefefe" d="M240 256l-96 0c-9,0 -17,-7 -17,-16 0,-9 8,-16 17,-16l96 0c9,0 16,7 16,16 0,9 -7,16 -16,16zm-96 -129l47 0c9,0 16,7 16,16 0,9 -7,16 -16,16l-47 0c-9,0 -17,-7 -17,-16 0,-9 8,-16 17,-16zm181 42l-2 -5 -4 -3c-5,-3 -30,1 -37,-5 -4,-5 -5,-13 -7,-23 -2,-21 -4,-22 -7,-29 -12,-25 -44,-44 -66,-46l-59 0c-47,0 -85,38 -85,84l0 42 0 57c0,47 38,85 85,85l97 0c47,0 85,-38 85,-85l1 -56 0 -12 -1 -4z"/></svg>`,},tumblr:{   				url:"https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=%url%&posttype=text&content=%text%&caption=%text%",icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#4b7a9e" rx="6.48" ry="6.48"/><path fill="#fff" fill-rule="evenodd" d="M19.16 18.91s-2.23 1.41-3.65.31c-.54-.42-.5-1-.5-3.32v-2.82h3.5v-2.46H15V6.75h-2.18c-.32 2-.88 3.43-3.1 4.11V13h1.67v5.39a3 3 0 0 0 1.13 2.75 6.07 6.07 0 0 0 5 .72 8.74 8.74 0 0 0 1.68-.63c-.04-.03-.04.25-.04-2.32z"/></g></g></svg>`,},whatsapp:{icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs><path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"/></defs><linearGradient id="b" x1="512.001" x2="512.001" y1=".978" y2="1025.023" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#61fd7d"/><stop offset="1" stop-color="#2bb826"/></linearGradient><use fill="url(#b)" overflow="visible" xlink:href="#a"/><path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"/></svg>`,url:"whatsapp://send?text=%text%",},twitter:{icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87"><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="#00c7ff" rx="6.48" ry="6.48"/><path fill="#fff" fill-rule="evenodd" d="M11.74 18.11a3.29 3.29 0 0 1-3.05-2.28 3.26 3.26 0 0 0 1.41 0A3.28 3.28 0 0 1 8 14.26a3.18 3.18 0 0 1-.48-1.75 3.24 3.24 0 0 0 1.46.4 3.3 3.3 0 0 1-1.35-2A3.25 3.25 0 0 1 8 8.54 9.39 9.39 0 0 0 14.76 12c0-.13 0-.24-.05-.36a3.28 3.28 0 0 1 5.58-2.74.17.17 0 0 0 .17.05 6.6 6.6 0 0 0 1.91-.73A3.36 3.36 0 0 1 21 10a6.3 6.3 0 0 0 1.83-.49l-.33.49a6.44 6.44 0 0 1-1.19 1.13.11.11 0 0 0-.05.1 9.09 9.09 0 0 1-.06 1.46 9.66 9.66 0 0 1-.85 2.92 9.44 9.44 0 0 1-1.77 2.59 8.77 8.77 0 0 1-4.51 2.51 9.79 9.79 0 0 1-1.83.22A9.27 9.27 0 0 1 7 19.52l-.08-.05a6.64 6.64 0 0 0 3.26-.47 6.53 6.53 0 0 0 1.56-.89z"/></g></g></svg>`,   								url:"http://twitter.com/intent/tweet?url=%url%&text=%text%",},reddit:{   								url:"https://www.reddit.com/submit?url=%url%&title=%title%&text=%text%%20%url%",icon:`<svg xmlns="http://www.w3.org/2000/svg" aria-label="Reddit" viewBox="0 0 512 512"><rect width="512" height="512" fill="#f40" rx="15%"/><g fill="#fff"><ellipse cx="256" cy="307" rx="166" ry="117"/><circle cx="106" cy="256" r="42"/><circle cx="407" cy="256" r="42"/><circle cx="375" cy="114" r="32"/></g><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#fff" stroke-width="16" d="m256 196 23-101 73 15"/><path stroke="#f40" stroke-width="13" d="m191 359c33 25 97 26 130 0"/></g><g fill="#f40"><circle cx="191" cy="287" r="31"/><circle cx="321" cy="287" r="31"/></g></svg>`,},boosted:{icon:`<img src="https://rawcdn.githack.com/NotableAPP/NotableAPP.github.io/009cec3f6568960cf97875077afd32e9775dcce1/app data/ico@max.png">`,   								url:"https://notableapp.github.io/share.html?text=%text%%20%url%&red=%current%&title=%title%",},search:{icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M7 4C5.35 4 4 5.35 4 7v36c0 1.65 1.35 3 3 3h36c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3H7zm15.5 9c5.24 0 9.5 4.26 9.5 9.5 0 2.26-.79 4.34-2.11 5.97l7.82 7.82-1.42 1.42-7.82-7.82A9.46 9.46 0 0 1 22.5 32c-5.24 0-9.5-4.26-9.5-9.5s4.26-9.5 9.5-9.5zm0 2a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 0 0-7.5-7.5z"/></svg>`,   								url:"https://www.google.com/search?q=%text%",},mail:{url:"mailto:?subject=%title%&body=%text%%20%url%",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><switch><g><path d="M80 12H16C9.373 12 4 17.373 4 24v48c0 6.627 5.373 12 12 12h64c6.627 0 12-5.373 12-12V24c0-6.627-5.373-12-12-12zm0 8c.462 0 .906.078 1.318.223L48 46.878 14.682 20.223A3.964 3.964 0 0 1 16 20h64zm0 56H16a4 4 0 0 1-4-4V28.322l33.501 26.801c.73.585 1.614.877 2.499.877s1.769-.292 2.499-.877L84 28.322V72a4 4 0 0 1-4 4z"/></g></switch></svg>`,},sms:{url:"sms:?body=%text%%20%url%",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M4 17.17L5.17 16H20V4H4v13.17zM15 9h2v2h-2V9zm-4 0h2v2h-2V9zM7 9h2v2H7V9z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"/></svg>`,},};function Ted(){var make = "make";return {share:(data)=>{let t=data.title,bo=data.text,u=data.url;var fls = $[make]('div');var hold = $[make]('div');butOths=$[make]('button');butOths.classList.add('btn-share');butOthsDiv=$[make]('div');butOthsDiv.classList.add('but-oths');butOthsDiv.append(butOths);butOths.innerText="other applications";hold.append(butOthsDiv);	hold.classList.add(data.mode||___global___.mode||metaMode.content);									hold.dataset.tedShareType="container";fls.dataset.tedShareType="fls-jam";	var copy = $[make]('div');	var inpC=$[make]('input');inpC.value=u;inpC.readOnly=true;;var butC = $[make]('button');	copy.append(inpC,butC);hold.append(copy);			copy.dataset.tedShareType='copy';												butC.dataset.tedShareType='copy';butC.innerHTML='copy';	inpC.dataset.tedShareType="copy";var main=$[make]('div');											main.dataset.tedShareType="main";hold.append(main);var apC = $[make]('div');												apC.dataset.tedShareType="apis";var flx = $[make]('div');flx.dataset.type="flex";												main.append(apC); apC.append(flx);if(data.allowTo){allowed = data.allowTo;}else if(___global___.allowTo){allowed =___global___.allowTo;}else{allowed = Object.keys(___a$p$i___);}	for(__api__ = 0;__api__<Object.keys(___a$p$i___).length;__api__++){var _api_ = 		Object.values(___a$p$i___)[__api__]	;var name_api = Object.keys(___a$p$i___)[__api__];if(allowed.includes(name_api)){var button = $[make]('button');button.innerHTML=_api_.icon;         			 button.dataset.shareApiButton=true;flx.append(button);	button.dataset.apiurl=_api_.url;	button.addEventListener('click', function (e){var _url_ = this.dataset.apiurl;_url_ = _url_.replaceAll('%text%',bo).replaceAll('%title%',t).replaceAll('%url%',u).replaceAll('%current%',window.location.href);window.location.assign(_url_);});}}document.body.append(fls);var head = $[make]("div");												head.dataset.tedShareType="head";var tit = $[make]("h3");tit.innerText=t;var close = $[make]("button");head.append(tit,close);close.addEventListener('click', function (){delShare(fls);});	hold.append(head);close.innerText="close";fls.append(hold);butC.addEventListener('click',()=>{inpC.select();inpC.setSelectionRange(0,inpC.value.length);document.execCommand("copy");butC.innerText="copied";});butOths.addEventListener('click',()=>{try{navigator.share({text:bo,title:t,url:u,})}catch(e){butOths.innerHTML=`<b style="color:red;">action is not supported</b>`}});return fls;},globalSet:(data)=>{for(gbl in Object.keys(data)){															___global___[Object.keys(data)[gbl]]=Object.values(data)[gbl];};}};};function delShare(screen) {screen.style.animation="removal .3s linear";setTimeout(()=>{screen.remove();},300);}
