class HashTable {
  table: [key: string, value: any][][];
  size: number;

  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  get(key: string): [key: string, value: any] | null {
    const target = this.hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return null;
  }

  set(key: string, value: any): void {
    const index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // Find the key/value pair in the chain
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      // not found, push a new key/value pair
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  remove(key: string): boolean | undefined {
    const index = this.hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  list(): [key: string, value: any][][] {
    return this.table.filter(Boolean);
  }

  log() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }

  private hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    console.log(hash % this.table.length);

    return hash % this.table.length;
  }
}

const hashTable = new HashTable();

const ht = new HashTable();

ht.set('France', 111);
ht.set('Spain', 150);
ht.set('ǻ', 192);

console.log(ht.list());

ht.log();

console.log(ht.size);
ht.remove('Spain');
ht.log();
