import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { departments } from "@/data/careerData";
import { 
  Computer, 
  Smartphone, 
  Cpu, 
  Settings, 
  Building, 
  ArrowRight,
  Users,
  Target,
  TrendingUp
} from "lucide-react";

// Icon mapping for departments
const iconMap = {
  Computer,
  Smartphone,
  Cpu,
  Settings,
  Building,
};

/**
 * Home page component - Entry point for students to explore career pathways
 * Shows overview, department cards, and key statistics
 */
export default function Home() {
  return (
    <Layout showSearch={true}>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Discover Your Engineering Career Path
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Explore career opportunities that align with your engineering department and skills. 
            Find your ideal role among hundreds of possibilities in AP & Telangana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg px-8 py-3"
            >
              <Link to="#departments">
                Explore Departments
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="text-lg px-8 py-3"
            >
              <Link to="/search">
                Search Career Roles
              </Link>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">5</h3>
              <p className="text-muted-foreground">Engineering Departments</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-lighter rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">15+</h3>
              <p className="text-muted-foreground">Career Roles</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-success">₹3-20L</h3>
              <p className="text-muted-foreground">Salary Range</p>
            </div>
          </div>
        </div>
      </div>

      {/* Department Selection Section */}
      <section id="departments" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Choose Your Engineering Department
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your engineering department to discover career roles that match your subjects and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department) => {
            const IconComponent = iconMap[department.icon as keyof typeof iconMap];
            
            return (
              <Card 
                key={department.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {department.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {department.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-6">
                    {/* Core Skills Preview */}
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-2">Core Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {department.coreSkills.slice(0, 3).map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs bg-primary-lighter text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {department.coreSkills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{department.coreSkills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Available Roles */}
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-2">
                        {department.roles.length} Career Roles Available
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        {department.roles.slice(0, 2).map(role => role.title).join(", ")}
                        {department.roles.length > 2 && "..."}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="card" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                  >
                    <Link to={`/department/${department.id}`}>
                      Explore {department.shortName}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-gradient-subtle p-8 rounded-lg border">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Ready to Start Your Career Journey?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Explore detailed career paths, understand skill requirements, and discover opportunities 
          that align with your engineering background.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/search">
              Search All Roles
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/department/cse">
              Start with CSE
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}