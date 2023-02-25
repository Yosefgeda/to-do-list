export const addList = document.querySelector('.list-perm');

export const innerHtmlHolder = (Arrows, Download) => {
  addList.innerHTML = `
      <div class="header-refresh">
          <h1>Today's To Do</h1>
          <img class="submit-btn" src='${Arrows}' />
      </div>
    
      <div class="input-field">
          <input class="input-field-add" type="text" placeholder="Add your list..."> 
          <img class="submit-btn add-list-btn" src='${Download}' />
      </div>
`;
};
