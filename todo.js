// Load system that making things load perfectly
window.addEventListener('load', () => {
// getting information from css classes that make this type of varables work
    var form = document.querySelector("#new-task-form");
    var input = document.querySelector("#new-task-input");
    var list_el = document.querySelector("#tasks");
    // adding event submitting that make whole js work
    form.addEventListener('submit', (e) => {
        // without that js gonna dissapeart in millisecond
            e.preventDefault();
        // 1 makeing input place for varable
            var task = input.value;
        // startting working for var that created and 
           var task_el = document.createElement('div');
        // giving tham classes of tha css that we have made so we need to firstable work in css to use made one in js
            task_el.classList.add('task');
            var task_content_el = document.createElement('div');
            task_content_el.classList.add('content');
        // telling this varable that its child of back one so that mean makeing structure of whole conception that gonna work on all added js project samely
            task_el.appendChild(task_content_el);
            var task_input_el = document.createElement('input');
            task_input_el.classList.add('text');
        // connecton task inputation txt to where to use it without it we gonna get 0 return
            task_input_el.value = task;
        // this makeing the thing that we just added only able to read we gonna delete its in future code
            task_input_el.setAttribute('readonly', 'readonly');
            task_content_el.appendChild(task_input_el);
            var task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');
            var task_edit_el = document.createElement('button');
            task_edit_el.classList.add('edit');
            task_edit_el.innerText = 'Edit';
            var task_delete_el = document.createElement('button');
            task_delete_el.classList.add('delete');
            task_delete_el.innerText = 'Delete';
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);
            task_el.appendChild(task_actions_el);
            list_el.appendChild(task_el);
        // 2 using this input place for this varable
        input.value = ""
        // makeing algorithm for what gonna heppened if we press "edit"
        task_edit_el.addEventListener('click', () => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
                // changing "edit" into "save"
				task_edit_el.innerText = "Save";
                // we removing attribute readonly here
				task_input_el.removeAttribute("readonly");
                // after we press edit and its change to save we can now edit txt but we need to choose to edit it with mouse so we makeing this auto one and its automaticly changing into editing txt mode
				task_input_el.focus();
            // with this else we working on after editing what gonna happen after we press save
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
        // this code is for algorithm that works on deleting whole thing 
        task_delete_el.addEventListener('click', () => {
			list_el.removeChild(task_el);
		});
    })
})
var usa = document.getElementById("#content")
console.log(usa)