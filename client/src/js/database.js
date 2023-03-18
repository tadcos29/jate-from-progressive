import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  // Assign a transaction with jate with read/write privileges
  // to tx making sure not to make extraneous async calls
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // put the argument ('content') passed in a call in editor.js into the database as value
  const request = store.put({ value: content });
  // presumably id will autoincrement as per pre-supplied code
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  // assign a transaction with jate with readwrite privs to tx as above
  const tx = jateDb.transaction('jate', 'readwrite');
  // obtain the object store via the transaction 
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};


initdb();
