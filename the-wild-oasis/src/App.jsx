import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import { AppLayout, ProtectedRouteContainer } from "./ui";
import { Dashboard, Bookings, Cabins, Users, Settings, Account, Login, PageNotFound, Booking, Checkin } from "./pages";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
            // staleTime: 60 * 1000,
        }
    }
})

function App() {
    return (
        <DarkModeProvider>
            <QueryClientProvider client={queryClient} >
                <ReactQueryDevtools initialIsOpen={false} />
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route element={
                            <ProtectedRouteContainer>
                                <AppLayout />
                            </ProtectedRouteContainer>
                        }>
                            <Route index element={<Navigate replace to="Dashboard" />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="bookings" element={<Bookings />} />
                            <Route path="cabins" element={<Cabins />} />
                            <Route path="users" element={<Users />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="account" element={<Account />} />
                        </Route>
                        <Route path="login" element={<Login />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
                <Toaster
                    position="top-center"
                    gutter={11}
                    containerStyle={{ margin: "7px" }}
                    toastOptions={{
                        success: {
                            duration: 3000,
                        },
                        error: {
                            duration: 5000,
                        }
                    }}
                    style={{
                        fontSize: "14px",
                        maxWidth: '500px',
                        padding: "16px 24px",
                        backgroundColor: 'var(--color-grey-0)',
                        color: 'var(--color-grey-700)'
                    }}
                ></Toaster>
            </QueryClientProvider>
        </DarkModeProvider>
    )
}

export default App;