<!-- Vue Component Demo - Vetur Extension -->
<template>
  <div class="user-component">
    <header class="user-header">
      <h1>{{ title }}</h1>
      <p class="user-count">
        Total Users: {{ users.length }}
      </p>
    </header>

    <!-- Search input với debounce -->
    <div class="search-section">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search users..."
        class="search-input"
        @input="handleSearch"
      >
    </div>

    <!-- User list -->
    <div class="user-list">
      <div
        v-for="user in filteredUsers"
        :key="user.id"
        class="user-card"
        :class="{ 'user-inactive': !user.isActive }"
      >
        <div class="user-info">
          <h3 class="user-name">
            {{ user.name }}
          </h3>
          <p class="user-email">
            {{ user.email }}
          </p>
          <span
            class="user-status"
            :class="user.isActive ? 'status-active' : 'status-inactive'"
          >
            {{ user.isActive ? 'Active' : 'Inactive' }}
          </span>
        </div>

        <div class="user-actions">
          <button
            :class="user.isActive ? 'btn-deactivate' : 'btn-activate'"
            @click="toggleUserStatus(user.id)"
          >
            {{ user.isActive ? 'Deactivate' : 'Activate' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div
      v-if="filteredUsers.length === 0"
      class="empty-state"
    >
      <p>No users found.</p>
    </div>

    <!-- Add user form -->
    <form
      class="add-user-form"
      @submit.prevent="addNewUser"
    >
      <h2>Add New User</h2>
      <div class="form-group">
        <label for="userName">Name:</label>
        <input
          id="userName"
          v-model="newUser.name"
          type="text"
          required
          class="form-input"
        >
      </div>
      <div class="form-group">
        <label for="userEmail">Email:</label>
        <input
          id="userEmail"
          v-model="newUser.email"
          type="email"
          required
          class="form-input"
        >
      </div>
      <button
        type="submit"
        class="btn-submit"
      >
        Add User
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import debounce from 'lodash/debounce';
import { computed, onMounted, ref } from 'vue';
import { UserManager, type User } from './index';

// Props và interfaces
interface NewUser {
  name: string;
  email: string;
}

// Reactive data
const title = ref('User Management Demo');
const users = ref<User[]>([]);
const searchQuery = ref('');
const userManager = new UserManager();

const newUser = ref<NewUser>({
  name: '',
  email: '',
});

// Computed properties
const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return users.value;
  }

  return users.value.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

// Methods
const handleSearch = debounce(() => {
  // Search logic handled by computed property
  console.log('Searching for:', searchQuery.value);
}, 300);

const toggleUserStatus = (userId: number) => {
  const success = userManager.deactivateUser(userId);
  if (success) {
    // Update local state
    const user = users.value.find((u) => u.id === userId);
    if (user) {
      user.isActive = !user.isActive;
    }
  }
};

const addNewUser = () => {
  if (newUser.value.name && newUser.value.email) {
    const user = userManager.addUser(newUser.value.name, newUser.value.email);
    users.value.push(user);

    // Reset form
    newUser.value = { name: '', email: '' };
  }
};

const loadUsers = async () => {
  await userManager.loadUsers();
  users.value = userManager.getAllActiveUsers();
};

// Lifecycle
onMounted(() => {
  loadUsers();
});
</script>

<style scoped>
.user-component {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.user-header {
  text-align: center;
  margin-bottom: 30px;
}

.user-header h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.user-count {
  color: #7f8c8d;
  font-size: 14px;
}

.search-section {
  margin-bottom: 30px;
}

.search-input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.search-input:focus {
  border-color: #3498db;
  outline: none;
}

.user-list {
  display: grid;
  gap: 15px;
  margin-bottom: 40px;
}

.user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  transition: all 0.3s ease;
}

.user-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-inactive {
  opacity: 0.6;
  background: #f8f9fa;
}

.user-info {
  flex: 1;
}

.user-name {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 18px;
}

.user-email {
  margin: 0 0 8px 0;
  color: #7f8c8d;
}

.user-status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.status-active {
  background: #d4edda;
  color: #155724;
}

.status-inactive {
  background: #f8d7da;
  color: #721c24;
}

.user-actions {
  margin-left: 20px;
}

.btn-deactivate,
.btn-activate {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.btn-deactivate {
  background: #dc3545;
  color: white;
}

.btn-deactivate:hover {
  background: #c82333;
}

.btn-activate {
  background: #28a745;
  color: white;
}

.btn-activate:hover {
  background: #218838;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #7f8c8d;
}

.add-user-form {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.add-user-form h2 {
  margin-top: 0;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-input:focus {
  border-color: #3498db;
  outline: none;
}

.btn-submit {
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background: #2980b9;
}
</style>
