import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './ui/ErrorFallback'
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <ErrorBoundary
        // fallback={<div>Something went wrong</div>}
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
        >
            <App />
        </ErrorBoundary>
    </StrictMode>
);
