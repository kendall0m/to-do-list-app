function newItem() {
    //1. add item to list 
      let li = $("<li></li>");
      let inputValue = $("#input").val();
      li.append(inputValue);
    
      if (inputValue === "") {
        alert("you must write something.");
      } else {
        let list = $("#list");
        list.append(li);
      }
    //2. cross item out of list
      let crossOut = () => {
        li.addClass("strike");
      };
    
      li.on("dblclick", () => {
        crossOut();
      });
    //3. delete item with X
      let crossOutButton = $("<crossOutButton></crossOutButton>");
      crossOutButton.append(document.createTextNode("X"));
      li.append(crossOutButton);
    
      let deleteListItem = () => {
        li.remove();
      };
    
      crossOutButton.on("click", () => {
        deleteListItem();
      });
    //4. reorder the items
      $("#list").sortable();
    }
    