import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getDepartmentById } from "@/data/careerData";
import { 
  BookOpen, 
  Briefcase, 
  TrendingUp, 
  ArrowRight, 
  Building2,
  DollarSign,
  Computer, 
  Smartphone, 
  Cpu, 
  Settings, 
  Building
} from "lucide-react";
import NotFound from "@/pages/NotFound";

// Icon mapping for departments
const iconMap = {
  Computer,
  Smartphone,
  Cpu,
  Settings,
  Building,
};

/**
 * Department page component - Shows detailed information about a specific engineering department
 * including subjects, skills, and career roles available for that department
 */
export default function Department() {
  const { departmentId } = useParams<{ departmentId: string }>();
  
  if (!departmentId) {
    return <NotFound />;
  }

  const department = getDepartmentById(departmentId);
  
  if (!department) {
    return <NotFound />;
  }

  const IconComponent = iconMap[department.icon as keyof typeof iconMap];
  
  return (
    <Layout 
      title={department.name}
      showBackButton={true}
      showSearch={true}
    >
      {/* Department Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {department.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          {department.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>{department.subjects.length} Core Subjects</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>{department.roles.length} Career Roles</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>{department.coreSkills.length} Key Skills</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Subjects and Skills */}
        <div className="lg:col-span-1 space-y-6">
          {/* Core Subjects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Core Subjects
              </CardTitle>
              <CardDescription>
                Key subjects you'll study in this department
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {department.subjects.map((subject) => (
                  <div 
                    key={subject}
                    className="p-3 bg-muted rounded-lg text-sm font-medium"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Core Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Industry Skills
              </CardTitle>
              <CardDescription>
                Skills you'll develop that are valued by employers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {department.coreSkills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-accent-lighter text-accent border-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Career Roles */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Career Opportunities
            </h2>
            <p className="text-muted-foreground">
              Explore the diverse career paths available for {department.shortName} graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {department.roles.map((role) => (
              <Card 
                key={role.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {role.title}
                  </CardTitle>
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
                            variant="outline"
                            className="text-xs"
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
                        <p className="font-medium text-success">
                          {role.salary}
                        </p>
                      </div>
                    </div>

                    <Separator />

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

          {/* Call to Action */}
          <Card className="mt-8 bg-gradient-subtle">
            <CardContent className="text-center p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Want to explore more options?
              </h3>
              <p className="text-muted-foreground mb-4">
                Search across all departments to find roles that match your interests
              </p>
              <Button variant="hero" asChild>
                <Link to="/search">
                  Search All Career Roles
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}