import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./app/providers/store";
import { Suspense } from "react";
import "./index.scss";
import { Loader } from "./shared/ui/loader";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
