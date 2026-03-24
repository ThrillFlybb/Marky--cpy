// Real embeddings need MediaPipe + model paths; that package breaks on Node 22+ here.
// Return empty vector so submit/search still runs; replace when you wire a working embedder.
export async function generateEmbedding(_text) {
    return [];
}
