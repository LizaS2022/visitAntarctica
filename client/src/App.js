import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Main from "./components/Main";
import InquirerForm from "./components/inquiryForm/Inquiry";
import Tour from "./components/tour/TourInfo";
import Video from "./components/Videos/Video";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<InquirerForm />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
