<script>
import { todos} from "../stores/supabaseStore.js";

</script>
<div >
<h1 class="heading">
   A Todo App
</h1>
<TodoForm />
{#each $todos as todo}
   <Todo todo={todo} index={todo.id} />
{/each}
</div>
