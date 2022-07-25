<script>
import { supabase } from '../lib/supabaseClient';

    
    import {addTodo} from '../stores/supabaseStore'

    let loading
    let email

    const loginUser = async()=>{
        try {
            loading = true
            const {error} = await supabase.auth.signIn({email})
            if (error) throw error
            alert('check email for magic login link')
            
        } catch (error) {
            console.error(error)
            alert(error.error_description || error.message)
        } finally {
            loading = false
        }

    }
</script>

<h1 class="heading">
    Login
 </h1>
 <p class="m-3 text-center text-slate-600 font-semibold">Login with your email</p>

 <form class="my-10" on:submit|preventDefault={loginUser}>
    <input type="email" placeholder="Enter your email" bind:value={email} class="input" />
    <button class="t-btn bg-sky-900 mx-5">Login</button>
 </form>