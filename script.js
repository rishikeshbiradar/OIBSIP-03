
// Accessing Add Button And Input
document.querySelector('#noteButton').onclick = function ()
{
    if (document.querySelector('#note input').value.length == 0)
    {
        alert("Please Add Your Task First")
    }

    else
    {
        // Adding Task To List
        document.querySelector('#noteKeeper').innerHTML += `
            <div class="note">
                <span id="addNote">
                    ${document.querySelector('#note input').value}
                </span>
                <button class="deleteNote">
                    Delete
                </button>
            </div>
        `;

        // Deleting The Task
        document.querySelector('#note input').value = "";
        var deletetask = document.querySelectorAll(".deleteNote");

        for (var i = 0; i < deletetask.length; i++)
        {
            deletetask[i].onclick = function ()
            {
                this.parentNode.remove();
            }
        }
    }
}


