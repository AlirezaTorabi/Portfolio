"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  ReactFlow,
} from "@xyflow/react";
import type { Edge, Node, NodeProps } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface ArchitectureNodeData extends Record<string, unknown> {
  category: string;
  title: string;
  detail: string;
  accent: string;
}

type ArchitectureNode = Node<ArchitectureNodeData, "architecture">;

function ArchitectureCard({ data }: NodeProps<ArchitectureNode>) {
  return (
    <article className="architecture-node" style={{ borderColor: `${data.accent}55` }}>
      <Handle type="target" position={Position.Top} className="architecture-handle" style={{ backgroundColor: data.accent }} />
      <div className="architecture-node-heading">
        <span className="architecture-node-mark" style={{ backgroundColor: data.accent }} />
        <span className="architecture-node-category">{data.category}</span>
      </div>
      <h2 className="architecture-node-title">{data.title}</h2>
      <p className="architecture-node-detail">{data.detail}</p>
      <Handle type="source" position={Position.Bottom} className="architecture-handle" style={{ backgroundColor: data.accent }} />
    </article>
  );
}

const nodeTypes = { architecture: ArchitectureCard };

const nodes: ArchitectureNode[] = [
  {
    id: "workspace",
    type: "architecture",
    position: { x: 500, y: 0 },
    data: { category: "WORKSPACE", title: "Alireza Toorabi", detail: "Portfolio · Next.js 16", accent: "#F28B2C" },
  },
  {
    id: "app-router",
    type: "architecture",
    position: { x: 500, y: 170 },
    data: { category: "ROUTING", title: "App Router", detail: "src/app", accent: "#BCE7D4" },
  },
  {
    id: "root-layout",
    type: "architecture",
    position: { x: 500, y: 340 },
    data: { category: "SHARED SHELL", title: "Root layout", detail: "layout.tsx · metadata · Geist", accent: "#D0B5F4" },
  },
  {
    id: "home-route",
    type: "architecture",
    position: { x: 140, y: 520 },
    data: { category: "ROUTE /", title: "Portfolio home", detail: "page.tsx", accent: "#BCE7D4" },
  },
  {
    id: "design-route",
    type: "architecture",
    position: { x: 820, y: 520 },
    data: { category: "ROUTE /DESIGN-SYSTEM", title: "Project map", detail: "Interactive architecture view", accent: "#F28B2C" },
  },
  {
    id: "global-styles",
    type: "architecture",
    position: { x: 1150, y: 340 },
    data: { category: "STYLES", title: "Global CSS", detail: "Tailwind 4 · motion · theme", accent: "#D0B5F4" },
  },
  {
    id: "navbar",
    type: "architecture",
    position: { x: 30, y: 740 },
    data: { category: "SHARED UI", title: "Navbar", detail: "Minimal navigation · active marker", accent: "#F28B2C" },
  },
  {
    id: "hero",
    type: "architecture",
    position: { x: 330, y: 740 },
    data: { category: "PAGE SECTION", title: "Hero", detail: "Editorial intro · focus areas", accent: "#D0B5F4" },
  },
  {
    id: "react-flow",
    type: "architecture",
    position: { x: 820, y: 740 },
    data: { category: "VISUALIZATION", title: "React Flow", detail: "Nodes · edges · canvas controls", accent: "#BCE7D4" },
  },
  {
    id: "hero-button",
    type: "architecture",
    position: { x: 300, y: 950 },
    data: { category: "UI COMPONENT", title: "HeroButton", detail: "Dither-backed primary action", accent: "#F28B2C" },
  },
  {
    id: "dither",
    type: "architecture",
    position: { x: 590, y: 950 },
    data: { category: "RENDERING", title: "Dither", detail: "Three.js · React Three Fiber", accent: "#D0B5F4" },
  },
  {
    id: "dependencies",
    type: "architecture",
    position: { x: 1150, y: 170 },
    data: { category: "DEPENDENCIES", title: "Runtime stack", detail: "React 19 · Next.js · Three.js", accent: "#BCE7D4" },
  },
  {
    id: "favicon",
    type: "architecture",
    position: { x: 1150, y: 520 },
    data: { category: "APP ASSET", title: "AT favicon", detail: "src/app/favicon.ico", accent: "#F28B2C" },
  },
];

const edges: Edge[] = [
  { id: "workspace-router", source: "workspace", target: "app-router" },
  { id: "workspace-deps", source: "workspace", target: "dependencies" },
  { id: "router-layout", source: "app-router", target: "root-layout" },
  { id: "router-favicon", source: "app-router", target: "favicon" },
  { id: "layout-home", source: "root-layout", target: "home-route" },
  { id: "layout-design", source: "root-layout", target: "design-route" },
  { id: "layout-styles", source: "root-layout", target: "global-styles" },
  { id: "home-navbar", source: "home-route", target: "navbar" },
  { id: "home-hero", source: "home-route", target: "hero" },
  { id: "hero-button", source: "hero", target: "hero-button" },
  { id: "hero-dither", source: "hero", target: "dither" },
  { id: "design-flow", source: "design-route", target: "react-flow" },
  { id: "deps-dither", source: "dependencies", target: "dither" },
  { id: "deps-flow", source: "dependencies", target: "react-flow" },
].map((edge) => ({
  ...edge,
  type: "smoothstep",
  style: { stroke: "#6B7069", strokeWidth: 1.2 },
  markerEnd: { type: MarkerType.ArrowClosed, color: "#6B7069", width: 14, height: 14 },
}));

export default function DesignSystemPage() {
  return (
    <main className="architecture-page">
      <header className="architecture-header">
        <div>
          <p className="architecture-kicker">ALIREZA TOORABI <span>/</span> WORKSPACE MAP</p>
          <h1>Project architecture</h1>
        </div>
        <div className="architecture-summary" aria-label="Project summary">
          <span><strong>02</strong> routes</span>
          <span><strong>08</strong> source files</span>
          <span><strong>14</strong> connections</span>
        </div>
      </header>

      <section className="architecture-canvas" aria-label="Interactive project architecture map">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.12, minZoom: 0.32, maxZoom: 1 }}
          minZoom={0.2}
          maxZoom={1.5}
          nodesConnectable={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="#484A45" />
        <Controls />
          <MiniMap
            nodeColor={(node) => (node.data as ArchitectureNodeData).accent}
            maskColor="rgba(12, 13, 12, 0.72)"
          />
        </ReactFlow>
      </section>
      <footer className="architecture-footer">
        <span>DRAG TO EXPLORE</span>
        <span>SCROLL TO ZOOM</span>
        <span>ROUTES · COMPONENTS · DEPENDENCIES</span>
      </footer>
    </main>
  );
}