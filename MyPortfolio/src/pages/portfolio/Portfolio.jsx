import PortfolioItem from "../../components/PortfolioItem";
import { portfolio } from "../../data";
import "./portfolio.scss";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
const Portfolio = () => {
  const portfolioSorted = useMemo(() => {
    return [...portfolio].sort((a, b) => (b?.id ?? 0) - (a?.id ?? 0));
  }, []);
  const latestId = portfolioSorted[0]?.id;

  const technologies = useMemo(() => {
    const set = new Set();

    for (const item of portfolioSorted) {
      const languageDetail = item?.details?.find(
        (d) =>
          typeof d?.title === "string" &&
          d.title.toLowerCase().includes("language"),
      );

      const language = languageDetail?.desc;
      if (typeof language !== "string") continue;

      for (const token of language.split(/[,+/]/g)) {
        const tech = token.trim();
        if (tech) set.add(tech);
      }
    }

    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [portfolioSorted]);

  const [query, setQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredPortfolio = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return portfolioSorted.filter((item) => {
      if (selectedTech !== "All") {
        const languageDetail = item?.details?.find(
          (d) =>
            typeof d?.title === "string" &&
            d.title.toLowerCase().includes("language"),
        );
        const language = languageDetail?.desc;
        if (typeof language !== "string") return false;
        if (!language.toLowerCase().includes(selectedTech.toLowerCase()))
          return false;
      }

      if (!normalizedQuery) return true;

      const titleMatch = (item?.title ?? "")
        .toLowerCase()
        .includes(normalizedQuery);
      if (titleMatch) return true;

      for (const detail of item?.details ?? []) {
        if (typeof detail?.desc !== "string") continue;
        if (detail.desc.toLowerCase().includes(normalizedQuery)) return true;
      }

      return false;
    });
  }, [portfolioSorted, query, selectedTech]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="portfolio section"
    >
      <h2 className="section__title">
        MY <span>Portfolio</span>
      </h2>

      <div className="portfolio__controls container">
        <input
          className="portfolio__control"
          type="search"
          placeholder="Search (React, Tailwind, Next.js...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="portfolio__select">
          <select
            className="portfolio__control portfolio__control--select"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
          >
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech === "All" ? "All technologies" : tech}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="portfolio__container container grid">
        {filteredPortfolio.map((item) => {
          return (
            <PortfolioItem
              key={item.id}
              {...item}
              isLatest={item.id === latestId}
            />
          );
        })}
      </div>
      {filteredPortfolio.length === 0 && (
        <p className="portfolio__empty container">
          Brak projektów dla wybranego filtra.
        </p>
      )}
    </motion.main>
  );
};

export default Portfolio;
