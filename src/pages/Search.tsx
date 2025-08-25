import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { departments, searchRoles } from "@/data/careerData";
import { 
  Search as SearchIcon, 
  Filter, 
  Briefcase, 
  Building2, 
  DollarSign,
  ArrowRight,
  X
} from "lucide-react";

/**
 * Search page component - Allows students to search and filter career roles
 * across all departments based on keywords, skills, or department
 */
export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  // Get all unique industries from roles
  const allIndustries = useMemo(() => {
    const industries = new Set<string>();
    departments.forEach(dept => {
      dept.roles.forEach(role => {
        role.industries.forEach(industry => industries.add(industry));
      });
    });
    return Array.from(industries).sort();
  }, []);

  // Filter and search roles
  const filteredRoles = useMemo(() => {
    let roles = searchQuery.trim() ? searchRoles(searchQuery) : 
                departments.flatMap(dept => 
                  dept.roles.map(role => ({ ...role, department: dept.name, departmentId: dept.id }))
                );

    // Filter by department
    if (selectedDepartment !== "all") {
      const dept = departments.find(d => d.id === selectedDepartment);
      if (dept) {
        roles = roles.filter((role: any) => role.department === dept.name);
      }
    }

    // Filter by industry
    if (selectedIndustry !== "all") {
      roles = roles.filter(role => role.industries.includes(selectedIndustry));
    }

    return roles;
  }, [searchQuery, selectedDepartment, selectedIndustry]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDepartment("all");
    setSelectedIndustry("all");
  };

  const hasActiveFilters = searchQuery.trim() || selectedDepartment !== "all" || selectedIndustry !== "all";

  return (
    <Layout 
      title="Search Career Roles"
      showBackButton={true}
    >
      {/* Search Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Find Your Perfect Career Role
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Search and filter through career opportunities across all engineering departments. 
          Discover roles that match your skills and interests.
        </p>
      </div>

      {/* Search and Filter Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SearchIcon className="w-5 h-5 text-primary" />
            Search & Filter Roles
          </CardTitle>
          <CardDescription>
            Use keywords, select departments, or filter by industry to find relevant career paths
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <Input
                placeholder="Search roles, skills, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10"
              />
            </div>

            {/* Department Filter */}
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept.id} value={dept.id}>
                    {dept.shortName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Industry Filter */}
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {allIndustries.map(industry => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters & Clear */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              
              {searchQuery.trim() && (
                <Badge variant="secondary" className="gap-1">
                  Search: "{searchQuery.trim()}"
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => setSearchQuery("")}
                  />
                </Badge>
              )}
              
              {selectedDepartment !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  Dept: {departments.find(d => d.id === selectedDepartment)?.shortName}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => setSelectedDepartment("all")}
                  />
                </Badge>
              )}
              
              {selectedIndustry !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  Industry: {selectedIndustry}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => setSelectedIndustry("all")}
                  />
                </Badge>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Search Results
          </h2>
          <div className="text-sm text-muted-foreground">
            Found {filteredRoles.length} role{filteredRoles.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filteredRoles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <Card 
              key={role.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {role.title}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className="text-xs flex-shrink-0 ml-2"
                  >
                    {departments.find(d => d.name === (role as any).department)?.shortName || (role as any).department}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3">
                  {role.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Key Skills */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.skills.slice(0, 3).map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-primary-lighter text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {role.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{role.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Industries and Salary */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <Building2 className="w-3 h-3" />
                        <span>Industries:</span>
                      </div>
                      <p className="font-medium">
                        {role.industries.slice(0, 2).join(", ")}
                        {role.industries.length > 2 && "..."}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-1 text-muted-foreground mb-1">
                        <DollarSign className="w-3 h-3" />
                        <span>Salary:</span>
                      </div>
                      <p className="font-medium text-success text-xs">
                        {role.salary}
                      </p>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                    asChild
                  >
                    <Link to={`/role/${role.id}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="text-center p-12">
            <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No roles found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or explore different departments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
              <Button variant="hero" asChild>
                <Link to="/">
                  Explore Departments
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Call to Action */}
      {filteredRoles.length > 0 && (
        <Card className="mt-12 bg-gradient-subtle">
          <CardContent className="text-center p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Found your ideal career path?
            </h3>
            <p className="text-muted-foreground mb-4">
              Explore the detailed pathway and start building the skills you need
            </p>
            <Button variant="hero" asChild>
              <Link to="/">
                <Briefcase className="w-4 h-4 mr-2" />
                Explore More Departments
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </Layout>
  );
}