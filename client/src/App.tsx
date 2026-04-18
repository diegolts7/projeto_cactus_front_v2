import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import PostCreation from "./pages/Home";
import Login from "./pages/Login";
import PublicHome from "./pages/PublicHome";
import Blog from "./pages/Blog";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Dashboard from "./pages/Dashboard";


function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path={"/"} component={PublicHome} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/contato"} component={Contato} />
      
      {/* Admin Routes */}
      <Route path={"/login"} component={Login} />
      <Route path={"/posts"} component={PostCreation} />
      <Route path={"/dashboard"} component={Dashboard} />
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
