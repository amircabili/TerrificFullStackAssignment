# Live-Shopping Streaming Application Architecture

## Overview
A scalable, real-time system allowing hosts to stream live while viewers can buy promoted products during the stream.

---

## Goals
- Handle thousands of concurrent viewers
- Real-time inventory sync to avoid over-ordering
- Ensure fairness (prevent hogging of limited stock)

---

## High-Level Architecture

- **Frontend (Client)**: React + WebSocket client to receive inventory updates
- **Backend (API Gateway)**: Node.js + Express handling user actions
- **WebSocket Server**: Real-time broadcast using Socket.IO or native WebSocket
- **Inventory Service**: Sync stock counts using Redis or PostgreSQL with row locking
- **Fair Queue Service**: FIFO queue per product using Redis queues
- **Streaming Layer**: Powered by a third-party service (e.g. Mux, Agora, or AWS IVS)
- **Database**: PostgreSQL for orders and product metadata
- **Cache/Queue**: Redis for high-speed real-time stock management
- **CDN**: For video and asset delivery

---

## Tech Stack
- **Backend**: Node.js + Express + Redis + PostgreSQL
- **Real-Time**: WebSocket or Socket.IO
- **Queue**: Redis Queue or BullMQ
- **Streaming**: Mux or AWS IVS
- **Frontend**: React + Bootstrap
- **Infrastructure**: Docker, Kubernetes (for horizontal scaling)

---

## Component Interaction
1. Host starts live stream.
2. Inventory Service syncs stock.
3. Viewers connect via WebSocket to get real-time product data.
4. Orders are submitted through backend → checked against Inventory Service.
5. Queue system ensures fairness.
6. Inventory updates broadcast to all clients.

---

## Fairness Strategy
- Limit purchase window to 1 minute per user
- Use verification token to lock stock before checkout
- Implement queue fallback if concurrency spikes

---
 
