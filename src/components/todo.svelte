<script>
    export let todo
    import {deleteTodo,toggleCompleted} from '../stores/supabaseStore'
</script>
<div class={`flex items-center p-5 my-5 rounded-lg ${todo.completed ? 'bg-indigo-200' : 'bg-green-50'}`}>
    
    <input type="checkbox" name="completed" checked={todo.completed} on:change={()=>toggleCompleted(todo.id)} 
        class="mr-2 form-checkbox h-5 w-5" />
        <h2 class="flex-1">{todo.text}</h2>
    <button class=" mr-0 text-rose-700" on:click={()=>deleteTodo(todo.id)}>x</button>
</div>