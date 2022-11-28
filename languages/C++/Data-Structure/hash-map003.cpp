#include <unordered_set>
#include <iostream>

int main()
{
    std::unordered_set<std::string> people;
    // Insert
    people.insert(std::string{"Michael"});
    people.insert("Chris");

    // Check if key exists
    std::string query;
    query = "Michael";
    if (people.find(query) == people.end())
    {
        std::cout << query << " is not in the dictionary!" << std::endl;
    }

    // Delete
    people.erase(query);
    if (people.find(query) == people.end())
    {
        std::cout << query << " is not in the dictionary!" << std::endl;
    }

    // Iterate
    for (const std::string& name : people)
    {
        std::cout << "Name: " << name << std::endl;
    }
}
