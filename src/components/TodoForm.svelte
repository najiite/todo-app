<script>
    let todo
    import { user } from '../stores/auth'
    import {addTodo} from '../stores/supabaseStore'
    const handleSubmit =()=>{
        addTodo(todo,$user.id)
    }
</script>
<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col  mt-5">   
        <label class="font-semibold text-neutral-700" for="todo"></label>
        <input type="text" id="todo" bind:value={todo} name="todo" placeholder="What to do?" 
        class="input">
    </div>
    <button type="submit" class="t-btn bg-sky-900 w-full my-5" >Submit</button>
</form>