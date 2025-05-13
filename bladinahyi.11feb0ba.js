const t="https://682364aa65ba058033969579.mockapi.io/";async function e(){try{let n=await fetch(`${t}/posts?_embed=comments`);var e=await n.json();let s=document.getElementById("postsContainer");s.innerHTML="",e.forEach(t=>{let e=document.createElement("div");e.classList.add("post"),e.innerHTML=`
          <div class="post_main">
            <h2 class="post_title">${t.title}</h2>
            <p class="post_content">${t.content}</p>
          </div>
          <div class="post_buttons">
            <button class="editPostButton post_edit_button" data-id="${t.id}">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
            <button class="deletePostButton post_del_button" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
          </div>
          <div class="comments_box">
            <h3 class="comment">\u{41A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{456}</h3>
            <ul class="comments_list">
              ${0===t.comments.length?'<li class="comment_items">Немає коментарів</li>':""}
              ${t.comments.map(t=>`<li>${t.text}</li>`).join("")}
              ${4===t.comments.length?'<li class="comment_items">Максимальна кількість коментарів до посту - 4</li>':""}
            </ul>
            <form class="createCommentForm" data-id="${t.id}">
              ${t.comments.length>=4?"":`<input type="text" class="commentInput comment_input" placeholder="\u{41D}\u{43E}\u{432}\u{438}\u{439} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}" required>`}
              ${t.comments.length>=4?"":`<button type="submit" class="comment_add_button">\u{414}\u{43E}\u{434}\u{430}\u{442}\u{438} \u{43A}\u{43E}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}</button>`}  
            </form>
          </div>
        `,s.appendChild(e)})}catch(t){console.error("Помилка при отриманні постів:",t)}}async function n(n,s){await fetch(`${t}/posts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,content:s})}),e()}async function s(n,s,a){await fetch(`${t}/posts/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:s,content:a})}),e()}async function a(n){await fetch(`${t}/posts/${n}`,{method:"DELETE"}),e()}async function o(n,s){await fetch(`${t}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:n,text:s})}),e()}document.getElementById("createPostForm").addEventListener("submit",async t=>{t.preventDefault();let e=document.getElementById("titleInput").value,s=document.getElementById("contentInput").value;await n(e,s),t.target.reset()}),document.addEventListener("click",async t=>{if(t.target.classList.contains("deletePostButton")){let e=t.target.dataset.id;await a(e)}else if(t.target.classList.contains("editPostButton")){let e=t.target.dataset.id,n=prompt("Новий заголовок"),a=prompt("Новий зміст");n&&a&&await s(e,n,a)}}),document.addEventListener("submit",async t=>{if(t.target.classList.contains("createCommentForm")){t.preventDefault();let e=t.target.dataset.id,n=t.target.querySelector(".commentInput");n&&n.value&&(await o(e,n.value),n.value="")}}),e();
//# sourceMappingURL=bladinahyi.11feb0ba.js.map
