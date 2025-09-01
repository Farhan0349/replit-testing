import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FiltersProps {
  filters: {
    clients: string;
    statuses: string;
    languages: string;
  };
  onFiltersChange: (filters: { clients: string; statuses: string; languages: string }) => void;
}

export default function Filters({ filters, onFiltersChange }: FiltersProps) {
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3" data-testid="filters-container">
      {/* All Clients Filter */}
      <Select 
        value={filters.clients} 
        onValueChange={(value) => handleFilterChange('clients', value)}
      >
        <SelectTrigger className="w-full sm:w-[140px]" data-testid="select-clients">
          <SelectValue placeholder="All Clients" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All Clients">All Clients</SelectItem>
          <SelectItem value="Active Only">Active Only</SelectItem>
          <SelectItem value="New Clients">New Clients</SelectItem>
          <SelectItem value="VIP Clients">VIP Clients</SelectItem>
        </SelectContent>
      </Select>

      {/* All Statuses Filter */}
      <Select 
        value={filters.statuses} 
        onValueChange={(value) => handleFilterChange('statuses', value)}
      >
        <SelectTrigger className="w-full sm:w-[140px]" data-testid="select-statuses">
          <SelectValue placeholder="All Statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All Statuses">All Statuses</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
          <SelectItem value="Pending">Pending</SelectItem>
        </SelectContent>
      </Select>

      {/* All Languages Filter */}
      <Select 
        value={filters.languages} 
        onValueChange={(value) => handleFilterChange('languages', value)}
      >
        <SelectTrigger className="w-full sm:w-[140px]" data-testid="select-languages">
          <SelectValue placeholder="All Languages" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All Languages">All Languages</SelectItem>
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="Polish">Polish</SelectItem>
          <SelectItem value="Spanish">Spanish</SelectItem>
          <SelectItem value="French">French</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}