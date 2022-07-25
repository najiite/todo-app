<script> 
    import {supabase} from "../lib/supabaseClient"
    const logout =()=>{
      supabase.auth.signOut()
      alert('Logged out, See you soon')
    }
    import { user } from '../stores/auth'


    let nicon = "menu"
    let mdclass = `bg-white  w-full left-0 md:flex md:items-center top-[80px] opacity-100 absolute`
    let closeClass = `md:flex md:items-center z-[-1] md:z-auto md:static 
    absolute bg-white w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 
    md:opacity-100 opacity-0 top-[-400px]`
    let Newclass = `md:flex md:items-center z-[-1] md:z-auto md:static 
    absolute bg-white w-full left-0 md:w-auto md:py-0 md:pl-0 pl-7 
    md:opacity-100 opacity-0 top-[-400px]`
    function Menu(){
    
      nicon === 'menu' ? (nicon = "close", closeClass = mdclass) : (nicon = "menu", closeClass= Newclass)
    }
  </script>
  <nav class="p-2 white shadow md:flex md:items-center md:justify-between">
    <div class="flex items-center justify-between">
        <span class="text-2xl mx-4 text-slate-700 font-bold"> WHAT TO DO?</span>
        <span class="text-3xl md:opacity-0" on:click={Menu}><ion-icon name={nicon}></ion-icon></span>
    
    </div>
    <div>

    </div>
    <ul class={closeClass}>
        <li class="m-5 divide-y"><a href="/" class="nav-link">Home</a></li>
        {#if $user }
          
        <li class="m-5"><a href on:click={logout} class="nav-link">Logout</a></li>
        {/if}
    </ul>
    
    
    
</nav>
