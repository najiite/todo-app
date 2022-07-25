<script>
    import {supabase} from "../lib/supabaseClient"
    import "../app.css";
    import Auth from "../components/Auth.svelte";
    import { user } from '../stores/auth'
    import { loadsTodos } from '../stores/supabaseStore'

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) =>{
        user.set(session?.user)
        if (session?.user) {
            loadsTodos()
        }
    })
</script>

<Nav /> 
<div class="container mx-auto max-w-lg p-6 mb-5">
    {#if $user }

        <slot></slot>
    {:else}
        <Auth />
    {/if}
    
</div>
<Footer />