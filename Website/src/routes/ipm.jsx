import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications"
import Introduction from "views/Introduction/Introduction.jsx";
import ProjectProposal from "views/ProjectProposal/ProjectProposal.jsx";
import Analysis from "views/Analysis/Analysis.jsx";
import FirstPrototype from "views/FirstPrototype/FirstPrototype.jsx";
import SecondPrototype from "views/SecondPrototype/SecondPrototype.jsx";
import Evaluation from "views/Evaluation/Evaluation.jsx";
import Presentation from "views/Presentation/Presentation.jsx";

const introductionRoute = [
  {
    path: "/introduction",
    sidebarName: "Introdução",
    navbarName: "Introdução ao projeto",
    icon: Dashboard,
    component: Introduction
  }
];

const phase1Routes = [
  {
    path: "/projectProposal",
    sidebarName: "Proposta",
    navbarName: "1.1 Proposta de Projeto",
    icon: Dashboard,
    component: ProjectProposal
  },
  {
    path: "/analysis",
    sidebarName: "Análise",
    navbarName: "1.2 Análise de Utilizadores e Tarefas",
    icon: Person,
    component: Analysis
  },
  {
    path: "/firstPrototype",
    sidebarName: "Primeiro protótipo",
    navbarName: "1.3 Protótipo em Papel",
    icon: "content_paste",
    component: FirstPrototype
  }
];

const phase2Routes = [
  {
    path: "/secondPrototype",
    sidebarName: "Segundo protótipo",
    navbarName: "2.1 Protótipo Computacional",
    icon: BubbleChart,
    component: SecondPrototype
  },
  {
    path: "/evaluation",
    sidebarName: "Avaliação",
    navbarName: "2.2 Avaliação heurística do Projeto WakeNBake",
    icon: LocationOn,
    component: Evaluation
  },
  {
    path: "/presentation",
    sidebarName: "Finalização",
    navbarName: "2.3 Produto final e Apresentação do Projeto",
    icon: Notifications,
    component: Presentation
  }
];

const redirectRoute = [
  { redirect: true, path: "/", to: "/introduction", navbarName: "Redirect" }
];

export { introductionRoute, phase1Routes, phase2Routes, redirectRoute };
