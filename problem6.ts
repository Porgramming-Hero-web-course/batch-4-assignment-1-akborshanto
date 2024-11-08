interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }
  
  // Sample Input
  const myProfile = { name: "Alice", age: 25, email: "akobr@example.com" };
