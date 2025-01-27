import { Router, Route, A } from "@solidjs/router";
import { AuthProvider, useAuth } from "./components/AuthProvider";
import { Show } from "solid-js";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";


import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signout from "./pages/Signout";

export default function App() {
  return (
    <AuthProvider>
  
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signout" component={Signout} />
      <Route path="/projects" component={Projects} />
      <Route path="/tasks/:id" component={Tasks} />
    </Router>
    </AuthProvider>
  );
}

function Layout(props) {
  const appName = import.meta.env.VITE_APP_NAME;
  const session = useAuth();

  return (
    <div class="p-4 flex-col gap-4">
      
      <div>
        <div class="text-4xl text-neutral-500 uppercase">
          {appName}
          </div>

          <div class="flex gap-2">
            <A href="/" class="bg-orange-400 p-2 rounded hover;bg-red-300">Naslovnica</A>
            <Show when={session()}>
            <A href="/projects" class="bg-orange-400 p-2 rounded hover;bg-red-300">Novi projekt</A>
            </Show>

            <Show when={session()}>
            <A href="/signout" class="bg-orange-400 p-2 rounded hover;bg-red-300">Odjava</A>
            </Show>
            
            <Show when={!session()}>
            <A href="/signin" class="bg-orange-400 p-2 rounded hover;bg-red-300">Prijava</A>
            </Show>
            
            
          </div>
        </div>

<div class="min-h-[75vh] w-10/12 mx-auto">
    {props.children}
    </div>
    <div class="text-center text-xs">
      Sva prava podržana {new Date().getFullYear()}. Pero i sinovi
      </div>
    </div>
  );
}
